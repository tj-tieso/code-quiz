//global variables
// var choiceEl = document.querySelector("#choice");
var quizTimer = 0;
var score = 0;
var questionBoxEl = document.querySelector("#question-wrapper");
var questionTitle = document.querySelector(".title");
var startButtonEl = document.querySelector("#start-quiz");
var availableQuestions = [];

// question arrays
var questionOptions = [
  {
    question: "Commonly used data types do not include:",
    choice1: "stings",
    choice2: "boolean",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3,
  },
  {
    question:
      "The condition in an if / else statment is enclosed with ______ .",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets",
    answer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store _____ .",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    answer: 4,
  },
];

//function to start game
var quizStart = function () {
  //removes paragraph
  var paragraph = document.getElementById("para");
  paragraph.remove();

  // Delete Start Button
  var buttonRemove = document.getElementById("start-quiz");
  buttonRemove.remove();
  // Shift <h1> to side
  // start timer
  generateQuestions();
};

var generateQuestions = function () {
  // question from aray
  questionTitle.textContent = "This will be a question.";

  //generate 4 question boxes
  // assign each a unique id
  // get info from array

  var choiceEl = document.createElement("li");
  choiceEl.setAttribute("id", "choice-");
  choiceEl.setAttribute("class", "choices");
  choiceEl.textContent = "this is a test"; // text content from Question array

  // append choiceEl to ul #questions
  questionBoxEl.appendChild(choiceEl);
  // load new question
  // // getNewQuestion();
};

// var getNewQuestion = function ();

var resetGame = function () {};

// on click, quizStart()
startButtonEl.addEventListener("click", quizStart);
