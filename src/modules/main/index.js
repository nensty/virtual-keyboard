import { generateKeyboard } from "../keyboard/keyboardGenerator";
import { renderHTMLElement } from "../utils/renderHTMLElement";

export const renderRootApp = () => {
  const main = renderHTMLElement("div", document.body, "main");
  const heading = renderHTMLElement("h1", main, "main__heading");
  const textArea = renderHTMLElement("textarea", main, "main__input");
  const keyboardBody = renderHTMLElement("div", main, "main__keyboard", "keyboard");
  const operationSystemParagraph = renderHTMLElement("p", main, "main__operation-system");

  heading.textContent = "RSS Virtual Keyboard";
  operationSystemParagraph.textContent = "The keyboard was created on MacOS";

  generateKeyboard(keyboardBody);
};