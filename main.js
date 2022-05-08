/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _modules_main_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main/index */ \"./src/modules/main/index.js\");\n\n // Create main wrapper\n\n(0,_modules_main_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/keyboard/constants.js":
/*!*******************************************!*\
  !*** ./src/modules/keyboard/constants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar functionalKeys = [\"Tab\", \"Shift\", \"CapsLock\", \"Enter\", \"Meta\", \"Alt\", \"opt\", \"cmd\", \"Control\", \"ctrl\", \"ArrowDown\", \"v\", \"ArrowUp\", \"^\", \"ArrowLeft\", \"<\", \"ArrowRight\", \">\", \"Escape\", \"Backspace\", \"Bksp\", \"Delete\", \"space\", \" \", \"fn\", \"F1\", \"F2\", \"F3\", \"F4\", \"F5\", \"F6\", \"F7\", \"F8\", \"F9\", \"F10\", \"F11\", \"F12\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (functionalKeys);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/keyboard/constants.js?");

/***/ }),

/***/ "./src/modules/keyboard/keyboardButton.js":
/*!************************************************!*\
  !*** ./src/modules/keyboard/keyboardButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar keyboardButtonCreation = function keyboardButtonCreation(lang, key, keyRu, className) {\n  var keyboardButton = document.createElement(\"div\");\n\n  if (lang === \"RU\") {\n    keyboardButton.innerHTML = \"<span class=\\\"hidden\\\">\".concat(key, \"</span> <span>\").concat(keyRu, \"</span>\");\n  } else {\n    keyboardButton.innerHTML = \"<span>\".concat(key, \"</span> <span class=\\\"hidden\\\">\").concat(keyRu, \"</span>\");\n  }\n\n  keyboardButton.classList.add(\"keyboard__key\", \"key\", className);\n  return keyboardButton;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardButtonCreation);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/keyboard/keyboardButton.js?");

/***/ }),

/***/ "./src/modules/keyboard/keyboardGenerator.js":
/*!***************************************************!*\
  !*** ./src/modules/keyboard/keyboardGenerator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keyboardButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardButton */ \"./src/modules/keyboard/keyboardButton.js\");\n/* harmony import */ var _keyboardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardRow */ \"./src/modules/keyboard/keyboardRow.js\");\n\n\n\nvar generateKeyboard = function generateKeyboard(keyboardWrapper, lang) {\n  var firstRowKeys = [(0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"`\", \"Ё\", \"Backquote\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 1, 1, \"Digit1\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 2, 2, \"Digit2\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 3, 3, \"Digit3\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 4, 4, \"Digit4\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 5, 5, \"Digit5\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 6, 6, \"Digit6\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 7, 7, \"Digit7\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 8, 8, \"Digit8\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 9, 9, \"Digit9\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, 0, 0, \"Digit0\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"-\", \"-\", \"Minus\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"=\", \"=\", \"Equal\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Bksp\", \"Bksp\", \"Backspace\")];\n  var secondRowKeys = [(0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Tab\", \"Tab\", \"Tab\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Q\", \"Й\", \"KeyQ\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"W\", \"Ц\", \"KeyW\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"E\", \"У\", \"KeyE\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"R\", \"К\", \"KeyR\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"T\", \"Е\", \"KeyT\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Y\", \"Н\", \"KeyY\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"U\", \"Г\", \"KeyU\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"I\", \"Ш\", \"KeyI\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"O\", \"Щ\", \"KeyO\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"P\", \"З\", \"KeyP\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"[\", \"Х\", \"BracketLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"]\", \"Ъ\", \"BracketRight\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Enter\", \"Enter\", \"Enter\")];\n  var thirdRowKeys = [(0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"CapsLock\", \"CapsLock\", \"CapsLock\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"A\", \"Ф\", \"KeyA\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"S\", \"Ы\", \"KeyS\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"D\", \"В\", \"KeyD\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"F\", \"А\", \"KeyF\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"G\", \"П\", \"KeyG\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"H\", \"Р\", \"KeyH\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"J\", \"О\", \"KeyJ\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"K\", \"Л\", \"KeyK\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"L\", \"Д\", \"KeyL\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \";\", \"Ж\", \"Semicolon\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"'\", \"Э\", \"Quote\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"\\\\\", \"\\\\\", \"Backslash\")];\n  var fourthRowKeys = [(0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Shift\", \"Shift\", \"ShiftLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"\\\\\", \"\\\\\", \"IntlBackslash\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Z\", \"Я\", \"KeyZ\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"X\", \"Ч\", \"KeyX\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"C\", \"С\", \"KeyC\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"V\", \"М\", \"KeyV\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"B\", \"И\", \"KeyB\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"N\", \"Т\", \"KeyN\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"M\", \"Ь\", \"KeyM\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \",\", \"Б\", \"Comma\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \".\", \"Ю\", \"Period\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"/\", \",\", \"Slash\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"^\", \"^\", \"ArrowUp\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"Shift\", \"Shift\", \"ShiftRight\")];\n  var fifthRowKeys = [(0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"fn\", \"fn\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"ctrl\", \"ctrl\", \"ControlLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"opt\", \"opt\", \"AltLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"cmd\", \"cmd\", \"MetaLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \" \", \" \", \"Space\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"cmd\", \"cmd\", \"MetaRight\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"opt\", \"opt\", \"AltRight\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"<\", \"<\", \"ArrowLeft\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \"v\", \"v\", \"ArrowDown\"), (0,_keyboardButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lang, \">\", \">\", \"ArrowRight\")];\n  keyboardWrapper.append((0,_keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(firstRowKeys));\n  keyboardWrapper.append((0,_keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(secondRowKeys));\n  keyboardWrapper.append((0,_keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(thirdRowKeys));\n  keyboardWrapper.append((0,_keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fourthRowKeys));\n  keyboardWrapper.append((0,_keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fifthRowKeys));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateKeyboard);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/keyboard/keyboardGenerator.js?");

/***/ }),

/***/ "./src/modules/keyboard/keyboardRow.js":
/*!*********************************************!*\
  !*** ./src/modules/keyboard/keyboardRow.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar keyboardRow = function keyboardRow(keysArr) {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"keyboard__row\");\n  keysArr.forEach(function (key) {\n    row.append(key);\n  });\n  return row;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardRow);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/keyboard/keyboardRow.js?");

/***/ }),

/***/ "./src/modules/main/index.js":
/*!***********************************!*\
  !*** ./src/modules/main/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keyboard_keyboardGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard/keyboardGenerator */ \"./src/modules/keyboard/keyboardGenerator.js\");\n/* harmony import */ var _utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/renderHTMLElement */ \"./src/modules/utils/renderHTMLElement.js\");\n/* harmony import */ var _utils_keyboardNonFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/keyboardNonFunctionalKeysHandler */ \"./src/modules/utils/keyboardNonFunctionalKeysHandler.js\");\n/* harmony import */ var _utils_keyboardFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/keyboardFunctionalKeysHandler */ \"./src/modules/utils/keyboardFunctionalKeysHandler.js\");\n\n\n\n\nvar main = (0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", document.body, \"main\");\nvar heading = (0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h1\", main, \"main__heading\");\n(0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"textarea\", main, \"main__input\");\nvar keyboardBody = (0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", main, \"main__keyboard\", \"keyboard\");\nvar operationSystemParagraph = (0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"p\", main, \"main__operation-system\");\nvar switchLanguageParagraph = (0,_utils_renderHTMLElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"p\", main, \"main__operation-system\");\n\nvar saveLangToStorage = function saveLangToStorage() {\n  if (window.localStorage.getItem(\"lang\") === \"ENG\") {\n    window.localStorage.setItem(\"lang\", \"RU\");\n  } else {\n    window.localStorage.setItem(\"lang\", \"ENG\");\n  }\n};\n\nvar handlePressKey = function handlePressKey(event) {\n  var pressedKey = document.getElementsByClassName(\"\".concat(event.code))[0];\n  var allKeys = document.getElementsByClassName(\"keyboard__key\");\n  var input = document.getElementsByClassName(\"main__input\")[0]; // Prevent default behaviour of input field\n\n  event.preventDefault();\n  input.focus();\n\n  if (typeof pressedKey !== \"undefined\" && !pressedKey.classList.contains(\"active\")) {\n    pressedKey.classList.add(\"active\");\n  }\n\n  if (event.altKey && event.code === \"Space\") {\n    Array.from(allKeys).forEach(function (key) {\n      key.classList.toggle(\"key\");\n      key.classList.toggle(\"key-RU\");\n      Array.from(key.children).forEach(function (child) {\n        child.classList.toggle(\"hidden\");\n      });\n    });\n    saveLangToStorage();\n  }\n\n  (0,_utils_keyboardNonFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.key, input);\n  (0,_utils_keyboardFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, event.code, input); // Set caret position to the end\n\n  input.setSelectionRange(input.innerHTML.length, input.innerHTML.length);\n};\n\nvar handleReleaseKey = function handleReleaseKey(_ref) {\n  var code = _ref.code;\n  var key = document.getElementsByClassName(\"\".concat(code))[0];\n\n  if (typeof key !== \"undefined\" && key.classList.contains(\"active\")) {\n    key.classList.remove(\"active\");\n  }\n};\n\nvar handleClickKey = function handleClickKey(event) {\n  var input = document.getElementsByClassName(\"main__input\")[0];\n\n  if (!event.target.classList.contains(\"keyboard__row\") && !event.target.classList.contains(\"main__keyboard\")) {\n    (0,_utils_keyboardNonFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event.target.innerText, input);\n    (0,_utils_keyboardFunctionalKeysHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, event.target.innerText, input);\n  }\n};\n\nvar renderRootApp = function renderRootApp() {\n  if (!window.localStorage.getItem(\"lang\")) {\n    window.localStorage.setItem(\"lang\", \"ENG\");\n  }\n\n  heading.textContent = \"RSS Virtual Keyboard\";\n  operationSystemParagraph.textContent = \"The keyboard was created on MacOS\";\n  switchLanguageParagraph.textContent = \"To switch language, use Option (Mac) / Alt (Windows) + Space. Not sync with real OS language\";\n  (0,_keyboard_keyboardGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(keyboardBody, window.localStorage.getItem(\"lang\"));\n  document.addEventListener(\"keydown\", handlePressKey);\n  document.addEventListener(\"keyup\", handleReleaseKey);\n  document.getElementsByClassName(\"main__keyboard\")[0].addEventListener(\"click\", handleClickKey);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderRootApp);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/main/index.js?");

/***/ }),

/***/ "./src/modules/utils/keyboardFunctionalKeysHandler.js":
/*!************************************************************!*\
  !*** ./src/modules/utils/keyboardFunctionalKeysHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar handlePressFunctionalKeys = function handlePressFunctionalKeys(event, key, input) {\n  var tempInput = input;\n\n  if (key === \"Tab\") {\n    event.preventDefault();\n    tempInput.innerHTML += \"\\t\";\n  }\n\n  if (key === \"Enter\") {\n    tempInput.innerHTML += \"\\n\";\n  }\n\n  if (key === \"Backspace\") {\n    tempInput.innerHTML = tempInput.innerHTML.slice(0, -1);\n  }\n\n  if (key === \"ArrowDown\" || key === \"v\") {\n    event.preventDefault();\n    tempInput.innerHTML += \"↓\";\n  }\n\n  if (key === \"ArrowUp\" || key === \"^\") {\n    event.preventDefault();\n    tempInput.innerHTML += \"↑\";\n  }\n\n  if (key === \"ArrowLeft\" || key === \"<\") {\n    event.preventDefault();\n    tempInput.innerHTML += \"←\";\n  }\n\n  if (key === \"ArrowRight\" || key === \">\") {\n    event.preventDefault();\n    tempInput.innerHTML += \"→\";\n  }\n\n  if (key === \"Space\") {\n    tempInput.innerHTML += \" \";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlePressFunctionalKeys);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/utils/keyboardFunctionalKeysHandler.js?");

/***/ }),

/***/ "./src/modules/utils/keyboardNonFunctionalKeysHandler.js":
/*!***************************************************************!*\
  !*** ./src/modules/utils/keyboardNonFunctionalKeysHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _keyboard_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard/constants */ \"./src/modules/keyboard/constants.js\");\n\n\nvar handlePressNonFunctionalKeys = function handlePressNonFunctionalKeys(key, input) {\n  var tempInput = input;\n\n  if (!_keyboard_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].includes(key)) {\n    tempInput.innerHTML += key;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlePressNonFunctionalKeys);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/utils/keyboardNonFunctionalKeysHandler.js?");

/***/ }),

/***/ "./src/modules/utils/renderHTMLElement.js":
/*!************************************************!*\
  !*** ./src/modules/utils/renderHTMLElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar renderHTMLElement = function renderHTMLElement(HTMLElement, parent) {\n  var _element$classList;\n\n  var element = document.createElement(HTMLElement);\n\n  for (var _len = arguments.length, classNames = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    classNames[_key - 2] = arguments[_key];\n  }\n\n  (_element$classList = element.classList).add.apply(_element$classList, classNames);\n\n  return parent.appendChild(element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHTMLElement);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/utils/renderHTMLElement.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;