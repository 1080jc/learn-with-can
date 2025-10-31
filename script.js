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
  saveScore();
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
  saveScore();
}

function showScore() {
  const percent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const scoreEl = document.getElementById("score");
  if (scoreEl) {
    scoreEl.textContent = `Porcentaje de aciertos: ${percent}%`;
  }
}

function saveScore() {
  const percent = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  localStorage.setItem("finalScore", percent);
}

function loadScore() {
  const savedScore = localStorage.getItem("finalScore");
  return savedScore ? parseInt(savedScore) : 0;
}
