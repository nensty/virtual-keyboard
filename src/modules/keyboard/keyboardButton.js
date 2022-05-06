const keyboardButtonCreation = (key, keyRu, className) => {
  const keyboardButton = document.createElement("div");
  keyboardButton.innerHTML = `<span>${key}</span> <span class="hidden">${keyRu}</span>`;
  keyboardButton.classList.add("keyboard__key", "key", className);

  return keyboardButton;
};

export default keyboardButtonCreation;
