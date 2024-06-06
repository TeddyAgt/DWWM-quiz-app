export const quizApi = {
  url: "https://quizzapi.jomoreschi.fr/api/v1/quiz?difficulty=facile",

  async getQuestions() {
    try {
      const response = await fetch(this.url);

      if (response.ok) {
        const data = await response.json();
        return this.formatQuestions(data.quizzes);
      } else {
        throw new Error(
          "Une erreur est survenue. Veuillez appeler Teddy pour lui péter sa gueule."
        );
      }
    } catch (e) {
      console.log(e);
    }
  },

  async postQuestion() {},

  formatQuestions(dataQuestions) {
    const questions = [];

    dataQuestions.forEach((q) => {
      questions.push({
        question: q.question,
        answer: q.answer,
        responses: [q.answer, ...q.badAnswers],
      });
    });

    return questions;
  },
};
