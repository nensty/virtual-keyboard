import functionalKeys from "../keyboard/constants";

const handlePressNonFunctionalKeys = (key, input) => {
  const tempInput = input;

  if (!functionalKeys.includes(key)) {
    tempInput.innerHTML += key;
  }
};

export default handlePressNonFunctionalKeys;
