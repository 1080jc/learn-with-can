document.addEventListener("DOMContentLoaded", () => {
      const score = loadScore();
      const resultText = document.getElementById("final-result");
      const message = document.getElementById("message");

      resultText.textContent = `${score}%`;

      if (score >= 90) {
        message.textContent = "¡Excelente trabajo!";
        resultText.style.color = "#28a745";
      } else if (score >= 70) {
        message.textContent = "¡Muy bien! Sigue practicando";
        resultText.style.color = "#ffc107";
      } else {
        message.textContent = "Sigue intentando";
        resultText.style.color = "#dc3545";
      }
    });