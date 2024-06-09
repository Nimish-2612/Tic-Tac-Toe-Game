const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const overlayElement = document.getElementById("config-overlay");
const overlayBackdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1Button = document.getElementById("edit-player1-btn");
const editPlayer2Button = document.getElementById("edit-player2-btn");
const cancelConfigButton = document.getElementById("cancel-config-btn");
const startNewGameButton = document.getElementById("start-game-btn");

const gameBoardElement = document.getElementById("game-board");

const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1Button.addEventListener("click", openConfigOverlay);
editPlayer2Button.addEventListener("click", openConfigOverlay);
cancelConfigButton.addEventListener("click", closeConfigOverlay);
overlayBackdropElement.addEventListener("click", closeConfigOverlay);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButton.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
