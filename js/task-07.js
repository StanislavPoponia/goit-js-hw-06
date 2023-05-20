const textElement = document.querySelector("#text");
const rangeElement = document.querySelector("#font-size-control");
const changeFontSize = (element) => {
  textElement.style.fontSize = `${element.currentTarget.value}px`;
};

rangeElement.addEventListener("input", changeFontSize);