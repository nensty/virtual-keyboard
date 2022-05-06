import generateKeyboard from "../keyboard/keyboardGenerator";
import renderHTMLElement from "../utils/renderHTMLElement";
import handlePressNonFunctionalKeys from "../utils/keyboardNonFunctionalKeysHandler";
import handlePressFunctionalKeys from "../utils/keyboardFunctionalKeysHandler";

const main = renderHTMLElement("div", document.body, "main");
const heading = renderHTMLElement("h1", main, "main__heading");
const textArea = renderHTMLElement("textarea", main, "main__input");
const keyboardBody = renderHTMLElement("div", main, "main__keyboard", "keyboard");
const operationSystemParagraph = renderHTMLElement("p", main, "main__operation-system");
const switchLanguageParagraph = renderHTMLElement("p", main, "main__operation-system");

const handlePressKey = (event) => {
  const key = document.getElementsByClassName(`${event.code}`)[0];
  const allKeys = document.getElementsByClassName("keyboard__key");
  const input = document.getElementsByClassName("main__input")[0];

  if (typeof key !== "undefined" && !key.classList.contains("active")) {
    key.classList.add("active");
  }

  if (event.altKey && event.code === "Space") {
    for (let key of allKeys) {
      key.classList.toggle("key");
      key.classList.toggle("key-RU");

      for (let child of key.children) {
        child.classList.toggle("hidden");
      }
    }
  }

  handlePressNonFunctionalKeys(event.key, input);
  handlePressFunctionalKeys(event, event.code, input);
};

const handleReleaseKey = (event) => {
  const key = document.getElementsByClassName(`${event.code}`)[0];

  if (typeof key !== "undefined" && key.classList.contains("active")) {
    key.classList.remove("active");
  }
};

const handleClickKey = (event) => {
  const input = document.getElementsByClassName("main__input")[0];
  console.log(event);

  if (!event.target.classList.contains("keyboard__row") && !event.target.classList.contains("main__keyboard")) {
    handlePressNonFunctionalKeys(event.target.innerText, input);
    handlePressFunctionalKeys(event, event.target.innerText, input);
  }
}

const renderRootApp = () => {
  heading.textContent = "RSS Virtual Keyboard";
  operationSystemParagraph.textContent = "The keyboard was created on MacOS";
  switchLanguageParagraph.textContent = "To switch language, use Option (Mac) / Alt (Windows) + Space";

  generateKeyboard(keyboardBody);

  document.addEventListener("keydown", handlePressKey);
  document.addEventListener("keyup", handleReleaseKey);
  document.getElementsByClassName("main__keyboard")[0].addEventListener("click", handleClickKey);
};

export default renderRootApp;
