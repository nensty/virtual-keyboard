export const keyboardButtonCreation = (key) => {
  const keyboardButton = document.createElement("div");
  keyboardButton.textContent = key;
  keyboardButton.classList.add("keyboard__key", "key", key);

  return keyboardButton;
}