const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const displayNewQuestion = (answeredQuestions) => {
  let currentQuestionId = getRandomNumber(0, answeredQuestions.length - 1);
  question.textContent = answeredQuestions[currentQuestionId].question;
  return currentQuestionId;
};
const setQuestionColor = (color) => {
  question.style.backgroundColor = color;
  document.querySelector("header").style.borderBottomColor = color;
};

const answer = document.querySelector("#answer");
const guessLabel = document.querySelector("#answer-label");
const score = document.querySelector("#score");
const bestScore = document.querySelector("#best-score");
const question = document.querySelector("#question");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "In which year did Christopher Columbus discover America?",
    answer: "1492",
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answer: "Carbon dioxide",
  },
  {
    question: "Who is known as the father of modern physics?",
    answer: "Albert Einstein",
  },
  {
    question: "What is the largest organ in the human body?",
    answer: "Skin",
  },
];

let answeredQuestions = JSON.parse(JSON.stringify(quizQuestions));
let currentQuestionId = displayNewQuestion(answeredQuestions);
let isAlreadyAnswered = false;
document.querySelector(".button-answer").addEventListener("click", () => {
  if (answeredQuestions.length == 0) {
    return;
  }
  if (isAlreadyAnswered) {
    console.log("Already answered!");
    return;
  }
  if (
    answer.value.toLowerCase() ==
    answeredQuestions[currentQuestionId].answer.toLowerCase()
  ) {
    setQuestionColor("rgb(70, 200, 40)");
    guessLabel.textContent = "Correct!";

    score.textContent++;
    bestScore.textContent =
      bestScore.textContent > score.textContent
        ? bestScore.textContent
        : score.textContent;
  } else {
    setQuestionColor("rgb(200, 70, 40)");
    guessLabel.textContent = `Wrong! Right answer is ${answeredQuestions[currentQuestionId].answer}`;
  }
  isAlreadyAnswered = true;
  answeredQuestions.splice(currentQuestionId, 1);
});

document
  .querySelector(".button-next-question")
  .addEventListener("click", () => {
    setQuestionColor("white");
    answer.value = "";
    if (!isAlreadyAnswered) {
      answeredQuestions.splice(currentQuestionId, 1);
    }
    isAlreadyAnswered = false;
    if (answeredQuestions.length == 0) {
      question.textContent = "Quiz Ended!";
      return;
    }
    currentQuestionId = displayNewQuestion(answeredQuestions);
  });

document.querySelector(".button-start-again").addEventListener("click", () => {
  guessLabel.textContent = "Take the quiz!";
  answer.value = "";
  score.textContent = 0;
  answeredQuestions = JSON.parse(JSON.stringify(quizQuestions));
  currentQuestionId = displayNewQuestion(answeredQuestions);
  isAlreadyAnswered = false;
});
