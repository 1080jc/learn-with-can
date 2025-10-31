// --- Multiple Choice Questions ---
const mcQuestions = [
  { q: "I ___ swim very well.", a: "can" },
  { q: "He ___ play the piano.", a: "can" },
  { q: "Fish ___ walk.", a: "can’t" }
];

// --- Writing Questions ---
const writingQuestions = [
  "Write a sentence with 'can'.",
  "Write a sentence with 'can’t'.",
  "Write a question using 'can'."
];

let score = 0;
let total = mcQuestions.length + writingQuestions.length;
let answered = 0;

// Load multiple choice questions
const mcContainer = document.getElementById("multiple-choice");

mcQuestions.forEach((item, index) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${index + 1}. ${item.q}</p>
    <button onclick="checkMC(this, '${item.a}')">can</button>
    <button onclick="checkMC(this, '${item.a}')">can’t</button>
    <div class="result"></div>
  `;
  mcContainer.appendChild(div);
});

// Load writing questions
const writingContainer = document.getElementById("writing");

writingQuestions.forEach((question, i) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>${i + 1}. ${question}</p>
    <textarea id="w${i}"></textarea>
    <button onclick="checkWriting('w${i}')">Check</button>
    <div class="result"></div>
  `;
  writingContainer.appendChild(div);
});

// --- Functions ---
function nextSection(id) {
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function checkMC(button, correct) {
  const parent = button.parentElement;
  const chosen = button.textContent.trim();
  const result = parent.querySelector(".result");

  parent.querySelectorAll("button").forEach(b => b.disabled = true);

  if (chosen === correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = `❌ Incorrect (Correct: ${correct})`;
    result.style.color = "red";
  }
  answered++;
  updateScore();
}

function checkWriting(id) {
  const textarea = document.getElementById(id);
  const text = textarea.value.toLowerCase().trim();
  const result = textarea.parentElement.querySelector(".result");

  if (text.includes("can")) {
    result.textContent = "✅ Great sentence!";
    result.style.color = "green";
    score++;
  } else if (text === "") {
    result.textContent = "⚠️ Please write something.";
    result.style.color = "orange";
  } else {
    result.textContent = "❌ Remember to use 'can' or 'can’t'.";
    result.style.color = "red";
  }
  textarea.disabled = true;
  textarea.nextElementSibling.disabled = true;
  answered++;
  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent = `Progress: ${answered}/${total} | Score: ${score}`;
  if (answered === total) {
    document.getElementById("toResults").disabled = false;
  }
}

function showResults() {
  nextSection("results");
  const resultText = document.getElementById("resultText");
  const finalScore = document.getElementById("finalScore");

  finalScore.textContent = `${score}/${total}`;
  if (score === total) {
    resultText.textContent = "🌟 Excellent! You mastered the use of 'can' and 'can’t'!";
  } else if (score >= total / 2) {
    resultText.textContent = "👍 Good job! Keep practicing!";
  } else {
    resultText.textContent = "💪 Don’t worry! Practice makes perfect!";
  }
}

function restart() {
  location.reload();
}
