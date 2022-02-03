window.onload = () => {
  const questionButton = document.querySelectorAll(".question-button");

  questionButton.forEach((question) => {
    question.onclick = () => {
      question.classList.toggle("question-open");

      let plusButtons = question.querySelectorAll(".plus");

      plusButtons.forEach((plus) => {
        plus.classList.toggle("rotate-plus");
      });

      let answerContainer = question.nextElementSibling;

      if (answerContainer.style.maxHeight) {
        answerContainer.style.maxHeight = null;
      } else {
        answerContainer.style.maxHeight = answerContainer.scrollHeight + "px";
      }
    };
  });
};
