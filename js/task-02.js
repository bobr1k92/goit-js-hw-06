const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");

const ingridientsList = [];

ingredients.forEach((element) => {
  const ingredientName = document.createElement("li");
  ingredientName.textContent = element;
  ingredientName.classList.add("item");
  ingridientsList.push(ingredientName);

  return ingredientName;
});

// console.log(ingridientsList);
list.append(...ingridientsList);
console.log(list);