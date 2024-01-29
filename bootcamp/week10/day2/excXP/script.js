let winBattle=()=>{
    return true;
}

let experiencePoints = winBattle() ?  10 : 1;

console.log(experiencePoints);
//exc3
let isString=(word)=>{
    return typeof word === 'string'
};
console.log(isString('hello'));
console.log(isString(10));

//exc4
const displayColorsAndCheckViolet = (colorsArray) => {
    // Mostrar los colores en el orden especificado
    colorsArray.forEach((color, index) => {
      console.log(`${index + 1}# choice is ${color}.`);
    });
  
    // Verificar si al menos un elemento es igual a "Violet"
    if (colorsArray.includes("Violet")) {
      console.log("Yeah");
    } else {
      console.log("No...");
    }
  };
  
  // Llamar a la arrow function con el array de colores
  const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  displayColorsAndCheckViolet(colors);
  

//exc5
  const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
  const ordinal = ["th", "st", "nd", "rd"];
  
  let displayColors = (colorsArray1) => {
    colorsArray1.forEach((color1, index) => {
      let ordinalIndex = index % 10; // Obtener el índice para determinar el ordinal (th, st, nd, rd)
      let ordinalSuffix = (ordinalIndex >= 1 && ordinalIndex <= 3) ? ordinal[ordinalIndex] : ordinal[0];
  
      console.log(`${index + 1}${ordinalSuffix} choice is ${color1}`);
    });
  };
  
  displayColors(colors1);
  

  //exc6
  let bankAmount = 1000; // Initial bank amount
const vatPercentage = 0.17; // VAT percentage in Israel (17%)

const expenses = ["+200", "-100", "+146", "+167", "-2900"];

// Modify expenses to include taxes (multiply each expense by the VAT)
const expensesWithTaxes = expenses.map(expense => {
  const amount = parseFloat(expense);
  const taxedAmount = amount + (amount * vatPercentage);
  return taxedAmount.toFixed(2); // Fixing to 2 decimal places
});

// Update the bankAmount based on modified expenses
expensesWithTaxes.forEach(expense => {
  bankAmount += parseFloat(expense);
});

// Display the final bankAmount standing at the end of the month
console.log("Final Bank Amount:", bankAmount.toFixed(2)); // Fixing to 2 decimal places
