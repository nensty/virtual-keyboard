import generateKeyboard from "../keyboard/keyboardGenerator";
import renderHTMLElement from "../utils/renderHTMLElement";
import handlePressNonFunctionalKeys from "../utils/keyboardNonFunctionalKeysHandler";
import handlePressFunctionalKeys from "../utils/keyboardFunctionalKeysHandler";

const main = renderHTMLElement("div", document.body, "main");
const heading = renderHTMLElement("h1", main, "main__heading");
renderHTMLElement("textarea", main, "main__input");
const keyboardBody = renderHTMLElement("div", main, "main__keyboard", "keyboard");
const operationSystemParagraph = renderHTMLElement("p", main, "main__operation-system");
const switchLanguageParagraph = renderHTMLElement("p", main, "main__operation-system");

const saveLangToStorage = () => {
  if (window.localStorage.getItem("lang") === "ENG") {
    window.localStorage.setItem("lang", "RU");
  } else {
    window.localStorage.setItem("lang", "ENG");
  }
};

const handlePressKey = (event) => {
  const pressedKey = document.getElementsByClassName(`${event.code}`)[0];
  const allKeys = document.getElementsByClassName("keyboard__key");
  const input = document.getElementsByClassName("main__input")[0];

  // Prevent default behaviour of input field
  event.preventDefault();
  input.focus();

  if (typeof pressedKey !== "undefined" && !pressedKey.classList.contains("active")) {
    pressedKey.classList.add("active");
  }

  if (event.altKey && event.code === "Space") {
    Array.from(allKeys).forEach((key) => {
      key.classList.toggle("key");
      key.classList.toggle("key-RU");

      Array.from(key.children).forEach((child) => {
        child.classList.toggle("hidden");
      });
    });

    saveLangToStorage();
  }

  handlePressNonFunctionalKeys(event.key, input);
  handlePressFunctionalKeys(event, event.code, input);

  // Set caret position to the end
  input.setSelectionRange(input.innerHTML.length, input.innerHTML.length);
};

const handleReleaseKey = ({ code }) => {
  const key = document.getElementsByClassName(`${code}`)[0];

  if (typeof key !== "undefined" && key.classList.contains("active")) {
    key.classList.remove("active");
  }
};

const handleClickKey = (event) => {
  const input = document.getElementsByClassName("main__input")[0];

  if (!event.target.classList.contains("keyboard__row") && !event.target.classList.contains("main__keyboard")) {
    handlePressNonFunctionalKeys(event.target.innerText, input);
    handlePressFunctionalKeys(event, event.target.innerText, input);
  }
};

const renderRootApp = () => {
  if (!window.localStorage.getItem("lang")) {
    window.localStorage.setItem("lang", "ENG");
  }

  heading.textContent = "RSS Virtual Keyboard";
  operationSystemParagraph.textContent = "The keyboard was created on MacOS";
  switchLanguageParagraph.textContent = "To switch language, use Option (Mac) / Alt (Windows) + Space. Not sync with real OS language";

  generateKeyboard(keyboardBody, window.localStorage.getItem("lang"));

  document.addEventListener("keydown", handlePressKey);
  document.addEventListener("keyup", handleReleaseKey);
  document.getElementsByClassName("main__keyboard")[0].addEventListener("click", handleClickKey);
};

export default renderRootApp;
