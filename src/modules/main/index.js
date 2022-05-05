import generateKeyboard from "../keyboard/keyboardGenerator";
import renderHTMLElement from "../utils/renderHTMLElement";

const handlePressKey = (event) => {
  // console.log(event);
  const key = document.getElementsByClassName(`${event.code}`)[0];
  const input = document.getElementsByClassName("main__input")[0];

  if (!key.classList.contains("active")) {
    key.classList.add("active");
  }

  input.innerHTML += event.key;
};

const handleReleaseKey = (event) => {
  const key = document.getElementsByClassName(`${event.code}`)[0];

  if (key.classList.contains("active")) {
    key.classList.remove("active");
  }
};

const renderRootApp = () => {
  const main = renderHTMLElement("div", document.body, "main");
  const heading = renderHTMLElement("h1", main, "main__heading");
  const textArea = renderHTMLElement("textarea", main, "main__input");
  const keyboardBody = renderHTMLElement("div", main, "main__keyboard", "keyboard");
  const operationSystemParagraph = renderHTMLElement("p", main, "main__operation-system");

  heading.textContent = "RSS Virtual Keyboard";
  operationSystemParagraph.textContent = "The keyboard was created on MacOS";

  generateKeyboard(keyboardBody);

  document.addEventListener("keydown", handlePressKey);
  document.addEventListener("keyup", handleReleaseKey);
};

export default renderRootApp;
