const handlePressFunctionalKeys = (event, key, input) => {
  if (key === "Tab") {
    event.preventDefault();

    input.innerHTML += '\t';
  }

  if (key === "Enter") {
    event.preventDefault();

    input.innerHTML += '\n';
  }

  if (key === "Backspace") {
    event.preventDefault();

    input.innerHTML = input.innerHTML.slice(0, -1);
  }

  if (key === "ArrowDown" || key === "v") {
    event.preventDefault();

    input.innerHTML += '↓';
  }

  if (key === "ArrowUp" || key === "^") {
    event.preventDefault();

    input.innerHTML += '↑';
  }

  if (key === "ArrowLeft" || key === "<") {
    event.preventDefault();

    input.innerHTML += '←';
  }

  if (key === "ArrowRight" || key === ">") {
    event.preventDefault();

    input.innerHTML += '→';
  }

  if (key === "space") {
    event.preventDefault();

    input.innerHTML += " ";
  }
};

export default handlePressFunctionalKeys;