import "../scss/create-quiz.scss";
import { Quiz, QuizItem, addQuiz, quizList } from "./Quiz";

const form = document.querySelector(".create-quiz-form");
const addNewAnswerButton = document.querySelector(".btn--add-answer");
const nextBtn = document.querySelector(".btn--next-btn");
const inputGroupTitle = document.querySelector(".input-group--title");
const questionContainer = document.querySelector(".question-container");
const errorMsg = document.querySelector(".error-message");
const wrongAnswersContainer = document.querySelector(
  ".wrong-answers-container"
);
let nbAnswers = 1;
let newQuiz;

form.addEventListener("submit", handleSubmit);
addNewAnswerButton.addEventListener("click", addNewAnswerInput);
nextBtn.addEventListener("click", handleClickNextBtn);

function handleClickNextBtn() {
  // 1 - Créer le nouveau quiz et lui ajouter un nom
  const title = document.querySelector("#title").value;
  if (!title) {
    errorMsg.textContent = "Ce champs est requis";
    return;
  }
  errorMsg.textContent = "";
  newQuiz = new Quiz(title);

  // 2 - Afficher la seconde partie du formulaire (ajout des questions)
  inputGroupTitle.classList.add("input-group--title--saved");
  questionContainer.classList.add("question-container--active");
}

function addNewAnswerInput() {
  nbAnswers++;
  wrongAnswersContainer.innerHTML += `
    <div class="input-group">
      <label for="wrong-answer-${nbAnswers}">Mauvaise réponse</label>
      <input type="text" id="wrong-answer-${nbAnswers}" name="wrongAnswers[]">
    </div>
  `;
}

function handleSubmit(e) {
  e.preventDefault();

  const values = [...document.querySelectorAll("input")].map(
    (input) => input.value
  );

  values.forEach((value) => {
    if (!value) {
      errorMsg.textContent = "Tous les champs sont requis";
      return;
    }
  });
  errorMsg.textContent = "";
  // Créer la nouvelle question
  console.log(values);
  const newQuestion = new QuizItem(values[1], values[2], [...values.slice(2)]);
  console.log(newQuestion);
  newQuiz.addQuestion(newQuestion);
  form.reset();
  console.log(newQuiz);
}

// On va faire par étapes:

// 1 - On demande le titre
// Au submit, on sauvegarde le titre, on l'affiche en dur dans le DOM et on affiche le container de création de question

// 2 - L'usilisateur entre autant de questions qu'il le souhaite, avec autant de réponses possibles (à voir si on limite plus tard)
// A chaque submit, on ajoute une nouvelle question à la liste des questions

// 3 - Lorsqu'il a terminé, on sauvegarde le nouveau quiz dans la liste des quiz
