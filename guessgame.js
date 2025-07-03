const againButton = document.querySelector(".again");
const num = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let highscores = 0;

console.log("Random:", random);

// Check button click
checkBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = "input can't be empty!";
  } else if (guess === random) {
    message.textContent = "win!";
    num.textContent = random;
    body.style.backgroundColor = "#60b347";

    if (scores > highscores) {
      highscores = scores;
      highscore.textContent = highscores;
    }


  } else {
    if (scores > 1) {
      message.textContent = guess < random ? "too low!" : "too high!";
      scores--;
      score.textContent = scores;
    } else {
      message.textContent = "lost!";
      score.textContent = 0;

      // ❌ Hide input & check button when score is 0
      guessInput.style.display = "none";
      checkBtn.style.display = "none";
    }
  }
});

// Again button click
againButton.addEventListener("click", () => {
  scores = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  score.textContent = scores;
  message.textContent = "Start guessing...";
  num.textContent = "?";
  guessInput.value = "";
  body.style.backgroundColor = "black";

  // ✅ Show input and check button again
  guessInput.style.display = "inline";
  checkBtn.style.display = "inline";
});
