const button = {
  buttonDecrement: document.querySelector("[data-action='decrement']"),
  buttonIncrement: document.querySelector("[data-action='increment']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};

button.buttonDecrement.addEventListener("click", decrement);
button.buttonIncrement.addEventListener("click", increment);