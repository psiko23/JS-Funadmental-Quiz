var question = document.getElementById("questions");
var timerSpan = document.querySelector("#timerValue");
var startButton = document.querySelector(".start-quiz");
var answersContainer = document.getElementById("answers");
var ansInput = document.getElementById("answer-input")

var timeLimit = 90;
var timer;

var myQuestions = [
  "What does the eventListener 'click' do?",
  "What element is used to link JavaScript documents?",
  "Which is NOT a type of loop?",
  "Which is NOT a JavaScript data type?",
  "When declaring a variable, you can use this keyword...",
  "Which method is used to add a new item into an array?",
  "How do you select an html element by its id and assign it to a variable?"
]

var qChoices = [
  ["stops bubbling", "listens for a mouse click", "listens for keyboard input"],
  ["<link>", "<java>", "<script>"],
  ["for", "while", "this"],
  ["word", "number", "object"],
  ["let", "var", "both 'let' and 'var'"],
  ["splice", "push", "pop"],
  ["getElementById", "querySelectorAll", "getId"]
];

var qCorr = [1, 2, 2, 0, 2, 1, 0];

var questionIndex = 0;
   


function displayQuestion() {
  question.textContent = myQuestions[questionIndex];
  answersContainer.innerHTML = "";

  for (let i = 0; i < qChoices[questionIndex].length; i++) {
    var label = document.createElement("label");
    var input = document.createElement("input");

    input.setAttribute("type", "radio");
    input.setAttribute("name", "choice");
    input.setAttribute("value", i);

    label.appendChild(input);
    label.appendChild(document.createTextNode(qChoices[questionIndex][i]));

    question.appendChild(label);
  }
}

function checkAnswer() {
  var selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
    var userAnswer = parseInt(selectedChoice.value);

    if (userAnswer === qCorr[questionIndex]) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }

    questionIndex++;
    if (questionIndex < myQuestions.length) {
      
      displayQuestion();
    } else {
      console.log("Quiz completed!");
      clearInterval(timer);
    }

    selectedChoice.checked = false;
  }
}

function startTimer() {
  if (timeLimit > 0) {
    timeLimit--;
    timerSpan.textContent = timeLimit;
  } else {
    clearInterval(timer);
  }
}

startButton.addEventListener("click", function () {
  timer = setInterval(startTimer, 1000);
  displayQuestion();
});

document.getElementById("submit-answer").addEventListener("click", checkAnswer);