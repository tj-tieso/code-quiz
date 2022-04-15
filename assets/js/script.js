//global variables
// var choiceEl = document.querySelector("#choice");
var quizTimer = 0;
var score = 0;
var choiceEl = document.querySelector(".choices");
var questionBoxEl = document.querySelector("#question-wrapper");
var questionTitle = document.querySelector(".title");
var startButtonEl = document.querySelector("#start-quiz");
var questionOneChoices = ["stings", "boolean", "alerts", "numbers"];
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
var currentQuestion = {};

// question arrays
var questionOptions = [
  {
    question: "Commonly used data types do not include:",
    choice: Array.from(questionOneChoices),
  },
  {
    question: "The condition in an if / else statment is enclosed with: ",
    choice: Array.from(questionTwoChoices),
  },
  {
    question: "Arrays in JavaScript can be used to store: ",
    choice: Array.from(questionThreeChoices),
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: Array.from(questionFourChoices),
  },
];

//function to start game
var quizStart = function () {
  score = 0;
  availableQuestions = [...questionOptions];
  // console.log(availableQuestions); // missing one question

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
  //in no questions left, end the game
  if (availableQuestions === 0) {
    endGame();
  }

  //get random question from array
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.question;

  // generate question boxes / get info from array / assign each a unique id
  for (var i = 0; i < currentQuestion.choice.length; i++) {
    // move to startGame() ??
    var choiceEl = document.createElement("li");
    choiceEl.setAttribute("id", "choice-" + i);
    choiceEl.setAttribute("class", "choices");
    choiceEl.textContent = currentQuestion.choice[i];

    // append choiceEl to ul
    questionBoxEl.appendChild(choiceEl);
  }
  // splice out currentQuestion, so it won't be used again
  availableQuestions.splice(questionIndex, 1);
  console.log(availableQuestions);

  // load new question after answer

  //
};

var resetGame = function () {};

var endGame = function () {
  console.log("we out folks");
};

// on click, quizStart()
startButtonEl.addEventListener("click", quizStart);
