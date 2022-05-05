export const keyboardRow = (keysArr) => {
  const row = document.createElement("div");
  row.classList.add("keyboard__row");

  for (let key of keysArr) {
    row.append(key);
  }

  return row;
}