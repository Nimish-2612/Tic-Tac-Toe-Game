function openConfigOverlay(event) {
  editedPlayer = +event.target.dataset.playerid;
  overlayElement.style.display = "block";
  overlayBackdropElement.style.display = "block";
}

function closeConfigOverlay() {
  overlayElement.style.display = "none";
  overlayBackdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent='';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); //prevent form default behaviour page wont submit
  const formData = new FormData(event.target); //Instantiating an object based on the object blueprint
  //formData will automatically pick up the input fields from the event
  const enteredPlayerName = formData.get("playername").trim(); //Get the value of one of our inputs by entering the id of the element we want to extract

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById('player'+editedPlayer+'-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer-1].name=enteredPlayerName;

  closeConfigOverlay();

}
