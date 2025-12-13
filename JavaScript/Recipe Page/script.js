let recipeObj = {
  title: "Tomato Pasta",
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: [
    "Pasta",
    "Oil",
    "Onions",
    "Salt",
    "Tomato Pasta Sauce",
    "Cheese",
  ],
};

let recipeTitleEl = document.getElementById("recipeTitle");
recipeTitleEl.textContent = recipeObj.title;

let recipeImageEl = document.getElementById("recipeImage");
recipeImageEl.setAttribute("src", recipeObj.imgSrc);

let ingredientsContainer = document.getElementById("IngredientsContainer");

for (let eachItem of recipeObj.ingredients) {
  let recipeIngedient = document.createElement("li");
  recipeIngedient.classList.add("ingredients");
  recipeIngedient.textContent = eachItem;
  ingredientsContainer.appendChild(recipeIngedient);
}
