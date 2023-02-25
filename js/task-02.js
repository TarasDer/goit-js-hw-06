const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayOfItems = ingredients.map((element) => {
  const listOfItems = document.createElement("li");
  listOfItems.textContent = element;
  listOfItems.classList.add("item");
  // console.log(listOfItems);
  return listOfItems;
});

const listEl = document.querySelector("#ingredients");
listEl.append(...arrayOfItems);
