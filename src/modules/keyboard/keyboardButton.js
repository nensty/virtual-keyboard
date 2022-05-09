const keyboardButtonCreation = (lang, key, keyRu, className) => {
  const keyboardButton = document.createElement("div");
  if (lang === "RU") {
    keyboardButton.innerHTML = `<span class="hidden">${key}</span> <span>${keyRu}</span>`;
  } else {
    keyboardButton.innerHTML = `<span>${key}</span> <span class="hidden">${keyRu}</span>`;
  }

  keyboardButton.classList.add("keyboard__key", "key", className);

  return keyboardButton;
};

export default keyboardButtonCreation;
