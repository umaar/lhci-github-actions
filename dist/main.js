const sleep = (milliSeconds) => {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
};

const getRandomCocktail = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
//   await sleep(5000);
  return await response.json();
};

window.onload = async () => {
  // get random cocktail
  const cocktailList = await getRandomCocktail();
  const cocktail = cocktailList.drinks[0];

  const name = document.getElementById("name");
  name.innerText = cocktail.strDrink;
  name.classList.remove("skeleton", "skeleton-h1");

  const image = document.getElementById("image");
  image.src = cocktail.strDrinkThumb;
  image.classList.remove("skeleton");

  const instructionsTitle = document.getElementById("instructions-title");
  instructionsTitle.innerText = "Instructions";
  instructionsTitle.classList.remove("skeleton", "skeleton-h3");

  const instructions = document.getElementById("instructions");
  instructions.innerText = cocktail.strInstructions.replace(
    /(\r\n|\n|\r)/gm,
    " "
  );
  instructions.classList.remove("skeleton", "skeleton-text");
};
