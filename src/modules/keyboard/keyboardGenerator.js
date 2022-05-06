import keyboardButtonCreation from "./keyboardButton";
import keyboardRow from "./keyboardRow";

const generateKeyboard = (keyboardWrapper) => {
  const firstRowKeys = [
    keyboardButtonCreation("`", "Ё","Backquote"),
    keyboardButtonCreation(1, 1,"Digit1"),
    keyboardButtonCreation(2, 2,"Digit2"),
    keyboardButtonCreation(3, 3,"Digit3"),
    keyboardButtonCreation(4, 4,"Digit4"),
    keyboardButtonCreation(5, 5,"Digit5"),
    keyboardButtonCreation(6, 6,"Digit6"),
    keyboardButtonCreation(7, 7,"Digit7"),
    keyboardButtonCreation(8, 8,"Digit8"),
    keyboardButtonCreation(9, 9,"Digit9"),
    keyboardButtonCreation(0, 0,"Digit0"),
    keyboardButtonCreation("-", "-","Minus"),
    keyboardButtonCreation("=", "=","Equal"),
    keyboardButtonCreation("Backspace", "Backspace","Backspace"),
  ];

  const secondRowKeys = [
    keyboardButtonCreation("Tab", "Tab","Tab"),
    keyboardButtonCreation("Q", "Й","KeyQ"),
    keyboardButtonCreation("W", "Ц","KeyW"),
    keyboardButtonCreation("E", "У","KeyE"),
    keyboardButtonCreation("R", "К","KeyR"),
    keyboardButtonCreation("T", "Е","KeyT"),
    keyboardButtonCreation("Y", "Н","KeyY"),
    keyboardButtonCreation("U", "Г","KeyU"),
    keyboardButtonCreation("I", "Ш","KeyI"),
    keyboardButtonCreation("O", "Щ","KeyO"),
    keyboardButtonCreation("P", "З","KeyP"),
    keyboardButtonCreation("[", "Х","BracketLeft"),
    keyboardButtonCreation("]", "Ъ","BracketRight"),
    keyboardButtonCreation("Enter", "Enter","Enter"),
  ];

  const thirdRowKeys = [
    keyboardButtonCreation("CapsLock", "CapsLock","CapsLock"),
    keyboardButtonCreation("A", "Ф","KeyA"),
    keyboardButtonCreation("S", "Ы","KeyS"),
    keyboardButtonCreation("D", "В","KeyD"),
    keyboardButtonCreation("F", "А","KeyF"),
    keyboardButtonCreation("G", "П","KeyG"),
    keyboardButtonCreation("H", "Р","KeyH"),
    keyboardButtonCreation("J", "О","KeyJ"),
    keyboardButtonCreation("K", "Л","KeyK"),
    keyboardButtonCreation("L", "Д","KeyL"),
    keyboardButtonCreation(";", "Ж","Semicolon"),
    keyboardButtonCreation("'", "Э","Quote"),
    keyboardButtonCreation("\\", "\\","Backslash"),
  ];

  const fourthRowKeys = [
    keyboardButtonCreation("Shift", "Shift","ShiftLeft"),
    keyboardButtonCreation("\\", "\\","IntlBackslash"),
    keyboardButtonCreation("Z", "Я","KeyZ"),
    keyboardButtonCreation("X", "Ч","KeyX"),
    keyboardButtonCreation("C", "С","KeyC"),
    keyboardButtonCreation("V", "М","KeyV"),
    keyboardButtonCreation("B", "И","KeyB"),
    keyboardButtonCreation("N", "Т","KeyN"),
    keyboardButtonCreation("M", "Ь","KeyM"),
    keyboardButtonCreation(",", "Б","Comma"),
    keyboardButtonCreation(".", "Ю","Period"),
    keyboardButtonCreation("/", ",","Slash"),
    keyboardButtonCreation("Shift", "Shift","ShiftRight"),
  ];

  const fifthRowKeys = [
    keyboardButtonCreation("fn", "fn"),
    keyboardButtonCreation("control", "control","ControlLeft"),
    keyboardButtonCreation("option", "option","AltLeft"),
    keyboardButtonCreation("command", "command","MetaLeft"),
    keyboardButtonCreation("space", "space","Space"),
    keyboardButtonCreation("command", "command","MetaRight"),
    keyboardButtonCreation("option", "option","AltRight"),
    keyboardButtonCreation("<", "<","ArrowLeft"),
    keyboardButtonCreation("^", "^","ArrowUp"),
    keyboardButtonCreation(">", ">","ArrowRight"),
    keyboardButtonCreation("v", "v","ArrowDown"),
  ];

  keyboardWrapper.append(keyboardRow(firstRowKeys));
  keyboardWrapper.append(keyboardRow(secondRowKeys));
  keyboardWrapper.append(keyboardRow(thirdRowKeys));
  keyboardWrapper.append(keyboardRow(fourthRowKeys));
  keyboardWrapper.append(keyboardRow(fifthRowKeys));
};

export default generateKeyboard;
