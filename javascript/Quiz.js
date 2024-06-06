// Liste des quiz
// A terme il faudra aller la get sur la DB
export const quizList = [];

export function addQuiz(quiz) {
  if (!quiz) return;

  quizList.push(quiz);
}

export class Quiz {
  constructor(title, questionList = [], author = "anonym") {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.nbCompletion = 0;
    this.mediumRate = null;
    this.questionsList = questionList;
  }

  addQuestion(question) {
    if (!question) return;

    this.questionsList.push(question);
  }

  updateQuestion(question) {
    //
  }

  deleteQuestion(questionId) {
    //
  }
}

export class QuizItem {
  constructor(question, answer, ...options) {
    this.id = crypto.randomUUID();
    this.question = question;
    this.answer = answer;
    this.options = options;
  }
}
