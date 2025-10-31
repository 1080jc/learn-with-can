let correctAnswers = 0;
let totalQuestions = 0;

function checkAnswer(button, isCorrect) {
  const question = button.parentElement;
  const buttons = question.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);

  if (isCorrect) {
    button.style.background = "#28a745";
    correctAnswers++;
  } else {
    button.style.background = "#dc3545";
  }

  totalQuestions++;
  showScore();
}

function checkWritingAnswer(inputId, expected) {
  const input = document.getElementById(inputId);
  const userAnswer = input.value.trim().toLowerCase();
  const result = document.getElementById(inputId + "-result");

  if (userAnswer === expected.toLowerCase()) {
    result.textContent = "✅ Correcto";
    result.style.color = "green";
    correctAnswers++;
  } else {
    result.textContent = "❌ Incorrecto";
    result.style.color = "red";
  }

  totalQuestions++;
  showScore();
}

function showScore() {
  const percent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  document.getElementById("score").textContent = `Porcentaje de aciertos: ${percent}%`;
}
