document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        const title = question.querySelector(".question-title");
        const answer = question.querySelector(".answer");

        title.addEventListener("click", () => {
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});