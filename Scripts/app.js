const overlayElement = document.getElementById("config-overlay");
const overlayBackdropElement = document.getElementById("backdrop");

const editPlayer1Button = document.getElementById("edit-player1-btn");
const editPlayer2Button = document.getElementById("edit-player2-btn");
const cancelConfigButton = document.getElementById("cancel-config-btn");

editPlayer1Button.addEventListener("click", openConfigOverlay);
editPlayer2Button.addEventListener("click", openConfigOverlay);
cancelConfigButton.addEventListener("click", closeConfigOverlay);
overlayBackdropElement.addEventListener("click", closeConfigOverlay);

