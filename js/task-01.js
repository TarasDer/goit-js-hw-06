const itemListEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemListEl.length}`);
itemListEl.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent}`,
    `Elements: ${element.lastElementChild.children.length}`
  )
);
