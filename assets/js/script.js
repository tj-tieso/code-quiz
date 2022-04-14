// 1. When Clicked Start:
// // a. <p> replaced
// // b. create 4 boxes for questions
// //

//global variables
var startButtonEl = document.querySelector("#start-quiz");
var questionOne = ["stings", "boolean", "alerts", "numbers"];
var questionTwo = [
  "quotes",
  "curly brackets",
  "parenthesis",
  "square brackets",
];

//function to start game
var quizStart = function () {
  //removes paragraph
  var paragraph = document.getElementById("para");
  paragraph.remove();
  // Delete Start Button

  // //
  // start timer
  generateQuestions();
};

//generate 4 question boxes
var generateQuestions = function () {};

var questionOne = function () {};

var questionTwo = function () {};

var questionThree = function () {};

var questionFour = function () {};

var questionFive = function () {};

var resetGame = function () {};

// on click, quizStart()
startButtonEl.addEventListener("click", quizStart);
