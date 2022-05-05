const renderHTMLElement = (HTMLElement, parent, ...classNames) => {
  const element = document.createElement(HTMLElement);

  element.classList.add(...classNames);

  return parent.appendChild(element);
};

export default renderHTMLElement;
