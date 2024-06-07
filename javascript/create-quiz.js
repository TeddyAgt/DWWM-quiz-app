import "../scss/create-quiz.scss";
import { Quiz, QuizItem, addQuiz, quizList } from "./Quiz";
// Éléments du DOM et variables     ******************************************************************************
const titleForm = document.querySelector(".create-quiz-form__title");
const titleError = document.querySelector(".error-message--title");
const questionForm = document.querySelector(".create-quiz-form__question");
const questionError = document.querySelector(".error-message-question");
const addAnswerBtn = document.querySelector("#add-answer");
const wrongAnswersContainer = document.querySelector(
  ".wrong-answers-container"
);

let nbAnswers = 1;
let newQuiz;

// Écouteurs d'évenements     ******************************************************************************
titleForm.addEventListener("submit", handleSubmitTitleForm);
questionForm.addEventListener("submit", handleSubmitQuestionForm);
addAnswerBtn.addEventListener("click", addAnswerInput);

// Fonctions gestionnaires d'évenement     ******************************************************************************
function handleSubmitTitleForm(e) {
  e.preventDefault();
  const title = document.querySelector("#title").value;

  if (!title) {
    titleError.textContent = "Le titre est obligatoire";
    return;
  } else {
    titleError.textContent = "";
    document.querySelector("h1").textContent = title;
    createQuiz(title);
    titleForm.classList.add("create-quiz-form__title--valid");
    questionForm.classList.add("create-quiz-form__question--active");
  }
}

function handleSubmitQuestionForm(e) {
  e.preventDefault();

  const values = [...questionForm.querySelectorAll("input")].map(
    (i) => i.value
  );
  if (values.includes("")) {
    questionError.textContent = "Tous les champs sont requis";
  } else {
    questionError.textContent = "";
    createQuestion(values);
    questionForm.reset();
  }
}

// Fonctions de gestion de la création des quiz     ******************************************************************************
function createQuiz(title) {
  newQuiz = new Quiz(title);
  addQuiz(newQuiz);
}

function addAnswerInput() {
  nbAnswers++;
  wrongAnswersContainer.innerHTML += `
    <div class="input-group">
      <label for="wrong-answer-${nbAnswers}">Mauvaise réponse</label>
      <input type="text" id="wrong-answer-${nbAnswers}" name="wrongAnswers[]">
    </div>
  `;
}

function createQuestion(values) {
  const newQuestion = new QuizItem(values[0], values[1], [...values.slice(1)]);
  newQuiz.addQuestion(newQuestion);
  console.log(quizList);
}
