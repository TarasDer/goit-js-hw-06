const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const handleCreateBtn = document.querySelector("button[data-create]");
const handleDestroyteBtn = document.querySelector("button[data-destroy]");

let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }
  boxesEl.insertAdjacentHTML("beforeend", markup);
}
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

inputEl.addEventListener("input", (event) => {
  amount = event.target.value;
});

handleCreateBtn.addEventListener("click", () => {
  createBoxes(amount);
  console.log("Button is clicked");
  inputEl.value = "";
});

handleDestroyteBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});
