//exc1
const sum = (a,b) => {
    return a + b;
}
console.log(sum (10,5));


//exc 2
// Function Declaration
function kgToGrams(weightInKg) {
    return weightInKg * 1000;
  }
  kgToGrams(2); // Example invocation
  
  // Function Expression
  const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  kgToGramsExpression(2); // Example invocation
  
  // Difference between function declaration and function expression:
  // Function declarations are hoisted, meaning you can invoke them before they're declared in the code. Function expressions are not hoisted.
  
  // One-line Arrow Function
  const kgToGramsArrow = weightInKg => weightInKg * 1000;
  kgToGramsArrow(2); // Example invocation

//exc 3
(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    document.body.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  })(2, "Alice", "Paris", "Web Developer");

//exc4
(function(userName) {
    const navbar = document.querySelector('.navbar');
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `Welcome, ${userName}! <img src="profile-picture.jpg" alt="Profile Picture">`;
    navbar.appendChild(welcomeDiv);
  })("John");

//exc5// Part I
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
    addIngredients("Apple", "Orange", "Carrot");
  }
  
  makeJuice("medium");
  
  // Part II
  function makeJuiceWithIngredients(size) {
    const ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(", ")}`;
    }
  
    addIngredients("Apple", "Orange", "Carrot");
    addIngredients("Celery", "Kale", "Ginger");
    displayJuice();
  }
  
  makeJuiceWithIngredients("large");
  