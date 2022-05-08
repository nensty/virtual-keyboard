const handlePressFunctionalKeys = (event, key, input) => {
  const tempInput = input;

  if (key === "Tab") {
    event.preventDefault();

    tempInput.innerHTML += "\t";
  }

  if (key === "Enter") {
    tempInput.innerHTML += "\n";
  }

  if (key === "Backspace" || key === "Bksp") {
    if (tempInput.innerHTML.endsWith("&nbsp;")) {
      tempInput.innerHTML = tempInput.innerHTML.replace("&nbsp;", "");
    }
    tempInput.innerHTML = tempInput.innerHTML.slice(0, -1);
  }

  if (key === "ArrowDown" || key === "v") {
    event.preventDefault();

    tempInput.innerHTML += "↓";
  }

  if (key === "ArrowUp" || key === "^") {
    event.preventDefault();

    tempInput.innerHTML += "↑";
  }

  if (key === "ArrowLeft" || key === "<") {
    event.preventDefault();

    tempInput.innerHTML += "←";
  }

  if (key === "ArrowRight" || key === ">") {
    event.preventDefault();

    tempInput.innerHTML += "→";
  }

  if (key === "Space" || key === "") {
    tempInput.innerHTML += " ";
  }
};

export default handlePressFunctionalKeys;
