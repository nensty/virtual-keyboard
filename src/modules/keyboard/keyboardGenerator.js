import keyboardButtonCreation from "./keyboardButton";
import keyboardRow from "./keyboardRow";

const generateKeyboard = (keyboardWrapper) => {
  const firstRowKeys = [
    keyboardButtonCreation("`", "Backquote"),
    keyboardButtonCreation(1, "Digit1"),
    keyboardButtonCreation(2, "Digit2"),
    keyboardButtonCreation(3, "Digit3"),
    keyboardButtonCreation(4, "Digit4"),
    keyboardButtonCreation(5, "Digit5"),
    keyboardButtonCreation(6, "Digit6"),
    keyboardButtonCreation(7, "Digit7"),
    keyboardButtonCreation(8, "Digit8"),
    keyboardButtonCreation(9, "Digit9"),
    keyboardButtonCreation(0, "Digit0"),
    keyboardButtonCreation("-", "Minus"),
    keyboardButtonCreation("=", "Equal"),
    keyboardButtonCreation("Backspace", "Backspace"),
  ];

  const secondRowKeys = [
    keyboardButtonCreation("Tab", "Tab"),
    keyboardButtonCreation("Q", "KeyQ"),
    keyboardButtonCreation("W", "KeyW"),
    keyboardButtonCreation("E", "KeyE"),
    keyboardButtonCreation("R", "KeyR"),
    keyboardButtonCreation("T", "KeyT"),
    keyboardButtonCreation("Y", "KeyY"),
    keyboardButtonCreation("U", "KeyU"),
    keyboardButtonCreation("I", "KeyI"),
    keyboardButtonCreation("O", "KeyO"),
    keyboardButtonCreation("P", "KeyP"),
    keyboardButtonCreation("[", "BracketLeft"),
    keyboardButtonCreation("]", "BracketRight"),
    keyboardButtonCreation("Enter", "Enter"),
  ];

  const thirdRowKeys = [
    keyboardButtonCreation("CapsLock", "CapsLock"),
    keyboardButtonCreation("A", "KeyA"),
    keyboardButtonCreation("S", "KeyS"),
    keyboardButtonCreation("D", "KeyD"),
    keyboardButtonCreation("F", "KeyF"),
    keyboardButtonCreation("G", "KeyG"),
    keyboardButtonCreation("H", "KeyH"),
    keyboardButtonCreation("J", "KeyJ"),
    keyboardButtonCreation("K", "KeyK"),
    keyboardButtonCreation("L", "KeyL"),
    keyboardButtonCreation(";", "Semicolon"),
    keyboardButtonCreation("'", "Quote"),
    keyboardButtonCreation("\\", "Backslash"),
  ];

  const fourthRowKeys = [
    keyboardButtonCreation("Shift", "ShiftLeft"),
    keyboardButtonCreation("\\", "IntlBackslash"),
    keyboardButtonCreation("Z", "KeyZ"),
    keyboardButtonCreation("X", "KeyX"),
    keyboardButtonCreation("C", "KeyC"),
    keyboardButtonCreation("V", "KeyV"),
    keyboardButtonCreation("B", "KeyB"),
    keyboardButtonCreation("N", "KeyN"),
    keyboardButtonCreation("M", "KeyM"),
    keyboardButtonCreation(",", "Comma"),
    keyboardButtonCreation(".", "Period"),
    keyboardButtonCreation("/", "Slash"),
    keyboardButtonCreation("Shift", "ShiftRight"),
  ];

  const fifthRowKeys = [
    keyboardButtonCreation("fn"),
    keyboardButtonCreation("control", "ControlLeft"),
    keyboardButtonCreation("option", "AltLeft"),
    keyboardButtonCreation("command", "MetaLeft"),
    keyboardButtonCreation("space", "Space"),
    keyboardButtonCreation("command", "MetaRight"),
    keyboardButtonCreation("option", "AltRight"),
    keyboardButtonCreation("<", "ArrowLeft"),
    keyboardButtonCreation("^", "ArrowUp"),
    keyboardButtonCreation(">", "ArrowRight"),
    keyboardButtonCreation("v", "ArrowDown"),
  ];

  keyboardWrapper.append(keyboardRow(firstRowKeys));
  keyboardWrapper.append(keyboardRow(secondRowKeys));
  keyboardWrapper.append(keyboardRow(thirdRowKeys));
  keyboardWrapper.append(keyboardRow(fourthRowKeys));
  keyboardWrapper.append(keyboardRow(fifthRowKeys));
};

export default generateKeyboard;
