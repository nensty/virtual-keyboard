import "./sass/style.scss";

// Create all Elements
const main = document.createElement("div");
const heading = document.createElement("h1");
const textArea = document.createElement("textarea");
const keyboardBody = document.createElement("div");
const operationSystemParagraph = document.createElement("p");

// Add class to HTMLElement for styling
main.classList.add("main");
heading.classList.add("main__heading");
textArea.classList.add("main__input");
keyboardBody.classList.add("main__keyboard");
operationSystemParagraph.classList.add("main__operation-system");

// Fill HTMLElement with needed attribute
heading.innerHTML = "RSS Virtual Keyboard";
operationSystemParagraph.innerHTML = "The keyboard was created on MacOS";

// Insert main wrapper to body
document.body.appendChild(main);

// Insert all elements to main wrapper
main.append(heading);
main.append(textArea);
main.append(keyboardBody);
main.append(operationSystemParagraph);
