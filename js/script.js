// js/script.js

// Run when the page loads
window.onload = function() {
  console.log("Website loaded successfully!");

  // Check if welcome message was already shown this session
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("Welcome to OUR UGC 1101 website!");
    sessionStorage.setItem("welcomeShown", "true"); // mark as shown
  }
};

// Example function for feedback button
function feedbackAlert() {
  alert("bruh no touchy grr it no wok");
}

/* ===== Quiz Dropdown Function ===== */
function checkSelection(selectId, correctAnswer, resultId) {
  const select = document.getElementById(selectId);
  const result = document.getElementById(resultId);
  const value = select.value;

  if (!value) {
    result.textContent = "";
    return;
  }

  if (value === correctAnswer || (correctAnswer === 'PC' && value === 'PC')) {
    result.textContent = "Your answer is correct!";
    result.style.color = "#00ff00"; // bright green for correct
  } else {
    result.textContent = "Your answer is incorrect!";
    result.style.color = "#ff4d4d"; // red for wrong
  }
}
