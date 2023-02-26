const handleInputRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

handleInputRange.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
