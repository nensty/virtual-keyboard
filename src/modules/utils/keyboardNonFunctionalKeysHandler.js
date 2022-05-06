import functionalKeys from "../keyboard/constants";

const handlePressNonFunctionalKeys = (key, input) => {
  if (!functionalKeys.includes(key)) {
    input.innerHTML += key;
  }
};

export default handlePressNonFunctionalKeys;