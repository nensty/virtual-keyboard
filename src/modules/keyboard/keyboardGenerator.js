import { keyboardButtonCreation } from "./keyboardButton";
import { keyboardRow } from "./keyboardRow";

export const generateKeyboard = (keyboardWrapper) => {

  const firstRowKeys = [
    keyboardButtonCreation("§"),
    keyboardButtonCreation(1),
    keyboardButtonCreation(2),
    keyboardButtonCreation(3),
    keyboardButtonCreation(4),
    keyboardButtonCreation(5),
    keyboardButtonCreation(6),
    keyboardButtonCreation(7),
    keyboardButtonCreation(8),
    keyboardButtonCreation(9),
    keyboardButtonCreation(0),
    keyboardButtonCreation("-"),
    keyboardButtonCreation("+"),
    keyboardButtonCreation("Backspace"),
  ];

  const secondRowKeys = [
    keyboardButtonCreation("Tab"),
    keyboardButtonCreation("Q"),
    keyboardButtonCreation("W"),
    keyboardButtonCreation("E"),
    keyboardButtonCreation("R"),
    keyboardButtonCreation("T"),
    keyboardButtonCreation("Y"),
    keyboardButtonCreation("U"),
    keyboardButtonCreation("I"),
    keyboardButtonCreation("O"),
    keyboardButtonCreation("P"),
    keyboardButtonCreation("["),
    keyboardButtonCreation("]"),
    keyboardButtonCreation("Enter"),
  ];

  const thirdRowKeys = [
    keyboardButtonCreation("CapsLock"),
    keyboardButtonCreation("A"),
    keyboardButtonCreation("S"),
    keyboardButtonCreation("D"),
    keyboardButtonCreation("F"),
    keyboardButtonCreation("G"),
    keyboardButtonCreation("H"),
    keyboardButtonCreation("J"),
    keyboardButtonCreation("K"),
    keyboardButtonCreation("L"),
    keyboardButtonCreation(";"),
    keyboardButtonCreation("'"),
    keyboardButtonCreation("\\"),
  ];

  const fourthRowKeys = [
    keyboardButtonCreation("Shift"),
    keyboardButtonCreation("`"),
    keyboardButtonCreation("Z"),
    keyboardButtonCreation("X"),
    keyboardButtonCreation("C"),
    keyboardButtonCreation("V"),
    keyboardButtonCreation("B"),
    keyboardButtonCreation("N"),
    keyboardButtonCreation("M"),
    keyboardButtonCreation(","),
    keyboardButtonCreation("."),
    keyboardButtonCreation("/"),
    keyboardButtonCreation("Shift"),
  ];

  const fifthRowKeys = [
    keyboardButtonCreation("fn"),
    keyboardButtonCreation("control"),
    keyboardButtonCreation("option"),
    keyboardButtonCreation("command"),
    keyboardButtonCreation("space"),
    keyboardButtonCreation("command"),
    keyboardButtonCreation("option"),
    keyboardButtonCreation("<"),
    keyboardButtonCreation("^"),
    keyboardButtonCreation(">"),
    keyboardButtonCreation("v"),
  ];

  keyboardWrapper.append(keyboardRow(firstRowKeys));
  keyboardWrapper.append(keyboardRow(secondRowKeys));
  keyboardWrapper.append(keyboardRow(thirdRowKeys));
  keyboardWrapper.append(keyboardRow(fourthRowKeys));
  keyboardWrapper.append(keyboardRow(fifthRowKeys));
}