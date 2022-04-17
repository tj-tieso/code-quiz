//global variables
var questionIndex = 0;
var quizTimer = 0;
var score = 0;
var choiceEl = document.querySelector(".choices");
var quizBoxEl = document.querySelector(".quiz-wrapper");
var questionBoxEl = document.querySelector("#question-wrapper");
var questionTitle = document.querySelector(".title");
var startButtonEl = document.querySelector("#start-quiz");
var viewScoreButtonEl = document.querySelector("#view-scores");
var questionOneChoices = ["strings", "boolean", "alerts", "numbers"];
var questionTwoChoices = [
  "quotes",
  "curly brackets",
  "parenthesis",
  "square brackets",
];
var questionThreeChoices = [
  "numbers and strings",
  "other arrays",
  "booleans",
  "all of the above",
];
var questionFourChoices = [
  "JavaScript",
  "terminal/bash",
  "for loops",
  "console.log",
];

var availableQuestions = [];
var currentQuestion;

// question arrays
var questionOptions = [
  {
    question: "Commonly used data types do not include:",
    choice: Array.from(questionOneChoices),
    answer: "alerts",
  },
  {
    question: "The condition in an if / else statment is enclosed with: ",
    choice: Array.from(questionTwoChoices),
    answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store: ",
    choice: Array.from(questionThreeChoices),
    answer: "all of the above",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: Array.from(questionFourChoices),
    answer: "console.log",
  },
];

//function to start game
var quizStart = function () {
  score = 0;
  // start timer

  //removes paragraph
  var paragraph = document.getElementById("para");
  paragraph.remove();

  // removes Start Button
  var buttonRemove = document.getElementById("start-quiz");
  buttonRemove.remove();

  //get first/new
  generateQuestions();
};

var generateQuestions = function () {
  //get question from array
  currentQuestion = questionOptions[questionIndex];
  questionTitle.textContent = currentQuestion.question;
  questionBoxEl.innerHTML = "";
  // generate question boxes / get info from array / assign each a unique id
  for (var i = 0; i < currentQuestion.choice.length; i++) {
    // move to startGame() ??
    var choiceEl = document.createElement("li");
    choiceEl.setAttribute("id", "choice-" + i);
    choiceEl.setAttribute("class", "choices");
    choiceEl.setAttribute("data-choice", currentQuestion.choice[i]);
    choiceEl.textContent = currentQuestion.choice[i];
    choiceEl.onclick = function (event) {
      var choice = this.getAttribute("data-choice");
      console.log(choice);
      if (choice !== currentQuestion.answer) {
        // displayResult(choice, currentQuestion.answer, "wrong");
        displayResult(choice, currentQuestion.answer, "incorrect!");
        // subtract from timer/score
        //
      } else {
        // console.log(choice + " is correct");
        displayResult(choice, currentQuestion.answer, "correct!");
      }
      questionIndex++;
      if (questionIndex === questionOptions.length) {
        endGame(); // replace with enterScore()
      } else {
        generateQuestions();
      }
    };
    // append choiceEl to ul
    questionBoxEl.appendChild(choiceEl);
  }
};

var displayResult = function (choice, answer, result) {
  var resultEl = document.createElement("h3");
  resultEl.textContent = `${choice} is ${result}`;
  quizBoxEl.appendChild(resultEl);

  setTimeout(function () {
    resultEl.textContent = "";
  }, 1000);
};

var enterScore = function () {
  // input initials
  //log score and intials to local storage
  //
};

var startScreen = function () {
  //reset all elements to start screen
};

var viewScores = function () {
  // fetch data from local storage
  // create new elements
  // input data within elements
  // add button to go back to start screen
};

var endGame = function () {
  questionBoxEl.innerHTML = "";
  questionTitle.textContent = "";
  console.log("we out folks");

  // reload starting page
};

// on click, quizStart()
startButtonEl.addEventListener("click", quizStart);

// view highscores button
// viewScoreButtonEl.addEventListener("click", viewScores);
viewScoreButtonEl.addEventListener("click", function (e) {
  console.log("WIP");
});
