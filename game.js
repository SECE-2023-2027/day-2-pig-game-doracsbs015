const player0Section = document.querySelector('.player-0-section');
const player1Section = document.querySelector('.player-1-section');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score0 = 0;
let score1 = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function init() {
  score0 = 0;
  score1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0Section.classList.add('player--active');
  player1Section.classList.remove('player--active');
  player0Section.classList.remove('player--winner');
  player1Section.classList.remove('player--winner');

  diceEl.style.display = 'none';
}

function switchPlayer() {
  if (activePlayer === 0) {
    current0El.textContent = 0;
    activePlayer = 1;
  } else {
    current1El.textContent = 0;
    activePlayer = 0;
  }
  
  currentScore = 0;
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if (!playing) return;

  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.style.display = 'block';
  diceEl.src = `dice${dice}.jpg`;

  if (dice !== 1) {
    currentScore += dice;
    if (activePlayer === 0) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  if (!playing) return;

  if (activePlayer === 0) {
    score0 += currentScore;
    score0El.textContent = score0;
  } else {
    score1 += currentScore;
    score1El.textContent = score1;
  }

  if ((activePlayer === 0 && score0 >= 100) || (activePlayer === 1 && score1 >= 100)) {
    playing = false;
    diceEl.style.display = 'none';
    if (activePlayer === 0) {
      player0Section.classList.add('player--winner');
    } else {
      player1Section.classList.add('player--winner');
    }
    player0Section.classList.remove('player--active');
    player1Section.classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);

init();
