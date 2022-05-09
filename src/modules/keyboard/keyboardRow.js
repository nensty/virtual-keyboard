const keyboardRow = (keysArr) => {
  const row = document.createElement("div");
  row.classList.add("keyboard__row");

  keysArr.forEach((key) => {
    row.append(key);
  });

  return row;
};

export default keyboardRow;
