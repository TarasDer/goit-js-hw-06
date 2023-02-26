let counterValue = 0;

const counterEl = document.querySelector("#value");

const handleDecrBtn = document.querySelector('button[data-action="decrement"]');

const handleIncrBtn = document.querySelector('button[data-action="increment"]');

handleDecrBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
  console.log("Button decrease was clicked");
});

handleIncrBtn.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
  console.log("Button increase was clicked");
});
