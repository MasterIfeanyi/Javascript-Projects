const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    question: "Who is the CEO of Tesla?",
    a: "Bill Gates",
    b: "Elon Musk",
    c: "Jeff Bezos",
    d: "Mark Zuckerberg",
    correct: "b",
  },
  {
    question: "What is the capital of Japan?",
    a: "Beijing",
    b: "Seoul",
    c: "Bangkok",
    d: "Tokyo",
    correct: "d",
  },
  {
    question: "Which language is used for web development?",
    a: "Python",
    b: "Java",
    c: "JavaScript",
    d: "C++",
    correct: "c",
  },
  {
    question: "What is the capital of Lagos?",
    a: "Ojo",
    b: "Ondo",
    c: "Benin",
    d: "Ikeja",
    correct: "d",
  },
];

let shuffledQuizData = [...quizData]; // Copy of quiz data to be shuffled

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart");
const failedQuestionsContainer = document.createElement("div"); // To display failed questions

let currentQuiz = 0;
let score = 0;
let failedQuestions = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = shuffledQuizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    } else {
      // Track failed question and its correct answer
      failedQuestions.push({
        question: shuffledQuizData[currentQuiz].question,
        correctAnswer:
          shuffledQuizData[currentQuiz][shuffledQuizData[currentQuiz].correct],
      });
    }
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }
});

function showResult() {
  resultContainer.style.display = "block";
  submitBtn.style.display = "none";
  resultText.innerText = `You answered ${score}/${shuffledQuizData.length} questions correctly!`;

  if (failedQuestions.length > 0) {
    displayFailedQuestions();
  }
}

function displayFailedQuestions() {
  failedQuestionsContainer.innerHTML = "<h3>Incorrect Questions:</h3>";
  failedQuestions.forEach((item, index) => {
    const questionEl = document.createElement("p");
    questionEl.innerHTML = `<strong>Question ${index + 1}:</strong> ${
      item.question
    } <br><strong>Correct Answer:</strong> ${item.correctAnswer}`;
    failedQuestionsContainer.appendChild(questionEl);
  });
  resultContainer.appendChild(failedQuestionsContainer);
}

restartBtn.addEventListener("click", () => {
  // Reset quiz state
  score = 0;
  currentQuiz = 0;
  failedQuestions = []; // Reset failed questions array
  submitBtn.style.display = "block";
  resultContainer.style.display = "none";
  failedQuestionsContainer.innerHTML = ""; // Clear previous failed questions

  shuffledQuizData = shuffle([...quizData]); // Shuffle questions again
  loadQuiz();
});

shuffledQuizData = shuffle([...quizData]); // Shuffle questions on first load
loadQuiz();
