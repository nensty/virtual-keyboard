import keyboardButtonCreation from "./keyboardButton";
import keyboardRow from "./keyboardRow";

const generateKeyboard = (keyboardWrapper, lang) => {
  const firstRowKeys = [
    keyboardButtonCreation(lang, "`", "Ё", "Backquote"),
    keyboardButtonCreation(lang, 1, 1, "Digit1"),
    keyboardButtonCreation(lang, 2, 2, "Digit2"),
    keyboardButtonCreation(lang, 3, 3, "Digit3"),
    keyboardButtonCreation(lang, 4, 4, "Digit4"),
    keyboardButtonCreation(lang, 5, 5, "Digit5"),
    keyboardButtonCreation(lang, 6, 6, "Digit6"),
    keyboardButtonCreation(lang, 7, 7, "Digit7"),
    keyboardButtonCreation(lang, 8, 8, "Digit8"),
    keyboardButtonCreation(lang, 9, 9, "Digit9"),
    keyboardButtonCreation(lang, 0, 0, "Digit0"),
    keyboardButtonCreation(lang, "-", "-", "Minus"),
    keyboardButtonCreation(lang, "=", "=", "Equal"),
    keyboardButtonCreation(lang, "Bksp", "Bksp", "Backspace"),
  ];

  const secondRowKeys = [
    keyboardButtonCreation(lang, "Tab", "Tab", "Tab"),
    keyboardButtonCreation(lang, "Q", "Й", "KeyQ"),
    keyboardButtonCreation(lang, "W", "Ц", "KeyW"),
    keyboardButtonCreation(lang, "E", "У", "KeyE"),
    keyboardButtonCreation(lang, "R", "К", "KeyR"),
    keyboardButtonCreation(lang, "T", "Е", "KeyT"),
    keyboardButtonCreation(lang, "Y", "Н", "KeyY"),
    keyboardButtonCreation(lang, "U", "Г", "KeyU"),
    keyboardButtonCreation(lang, "I", "Ш", "KeyI"),
    keyboardButtonCreation(lang, "O", "Щ", "KeyO"),
    keyboardButtonCreation(lang, "P", "З", "KeyP"),
    keyboardButtonCreation(lang, "[", "Х", "BracketLeft"),
    keyboardButtonCreation(lang, "]", "Ъ", "BracketRight"),
    keyboardButtonCreation(lang, "Enter", "Enter", "Enter"),
  ];

  const thirdRowKeys = [
    keyboardButtonCreation(lang, "CapsLock", "CapsLock", "CapsLock"),
    keyboardButtonCreation(lang, "A", "Ф", "KeyA"),
    keyboardButtonCreation(lang, "S", "Ы", "KeyS"),
    keyboardButtonCreation(lang, "D", "В", "KeyD"),
    keyboardButtonCreation(lang, "F", "А", "KeyF"),
    keyboardButtonCreation(lang, "G", "П", "KeyG"),
    keyboardButtonCreation(lang, "H", "Р", "KeyH"),
    keyboardButtonCreation(lang, "J", "О", "KeyJ"),
    keyboardButtonCreation(lang, "K", "Л", "KeyK"),
    keyboardButtonCreation(lang, "L", "Д", "KeyL"),
    keyboardButtonCreation(lang, ";", "Ж", "Semicolon"),
    keyboardButtonCreation(lang, "'", "Э", "Quote"),
    keyboardButtonCreation(lang, "\\", "\\", "Backslash"),
  ];

  const fourthRowKeys = [
    keyboardButtonCreation(lang, "Shift", "Shift", "ShiftLeft"),
    keyboardButtonCreation(lang, "\\", "\\", "IntlBackslash"),
    keyboardButtonCreation(lang, "Z", "Я", "KeyZ"),
    keyboardButtonCreation(lang, "X", "Ч", "KeyX"),
    keyboardButtonCreation(lang, "C", "С", "KeyC"),
    keyboardButtonCreation(lang, "V", "М", "KeyV"),
    keyboardButtonCreation(lang, "B", "И", "KeyB"),
    keyboardButtonCreation(lang, "N", "Т", "KeyN"),
    keyboardButtonCreation(lang, "M", "Ь", "KeyM"),
    keyboardButtonCreation(lang, ",", "Б", "Comma"),
    keyboardButtonCreation(lang, ".", "Ю", "Period"),
    keyboardButtonCreation(lang, "/", ",", "Slash"),
    keyboardButtonCreation(lang, "^", "^", "ArrowUp"),
    keyboardButtonCreation(lang, "Shift", "Shift", "ShiftRight"),
  ];

  const fifthRowKeys = [
    keyboardButtonCreation(lang, "fn", "fn"),
    keyboardButtonCreation(lang, "ctrl", "ctrl", "ControlLeft"),
    keyboardButtonCreation(lang, "opt", "opt", "AltLeft"),
    keyboardButtonCreation(lang, "cmd", "cmd", "MetaLeft"),
    keyboardButtonCreation(lang, " ", " ", "Space"),
    keyboardButtonCreation(lang, "cmd", "cmd", "MetaRight"),
    keyboardButtonCreation(lang, "opt", "opt", "AltRight"),
    keyboardButtonCreation(lang, "<", "<", "ArrowLeft"),
    keyboardButtonCreation(lang, "v", "v", "ArrowDown"),
    keyboardButtonCreation(lang, ">", ">", "ArrowRight"),
  ];

  keyboardWrapper.append(keyboardRow(firstRowKeys));
  keyboardWrapper.append(keyboardRow(secondRowKeys));
  keyboardWrapper.append(keyboardRow(thirdRowKeys));
  keyboardWrapper.append(keyboardRow(fourthRowKeys));
  keyboardWrapper.append(keyboardRow(fifthRowKeys));
};

export default generateKeyboard;
