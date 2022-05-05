const keyboardButtonCreation = (key, className) => {
  const keyboardButton = document.createElement("div");
  keyboardButton.textContent = key;
  keyboardButton.classList.add("keyboard__key", "key", className);

  return keyboardButton;
};

export default keyboardButtonCreation;
