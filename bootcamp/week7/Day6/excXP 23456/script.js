//exc 2
const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

//exc 3
const isString = (value) => typeof value === 'string';

console.log(isString('hello'));    // true
console.log(isString([1, 2, 4, 0])); // false

//exc 4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}# choice is ${colors[i]}.`);
}

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}
//exc 5 colors 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
    console.log(`${i + 1}${ordinal[i + 1] || ordinal[0]} choice is ${colors[i]}.`);
}


//exc 6
let bankAmount = 1000; // Initial bank amount
const vatPercentage = 17; // VAT percentage
const details = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < details.length; i++) {
    let expense = parseFloat(details[i]);
    let vatAmount = (vatPercentage / 100) * Math.abs(expense);
    
    if (expense < 0) {
        details[i] = (expense - vatAmount).toString();
    } else {
        details[i] = (expense + vatAmount).toString();
    }
}

// Calculate the current bank account standing
const finalAmount = details.reduce((acc, val) => acc + parseFloat(val), bankAmount);

console.log(`Current bank account standing: ${finalAmount.toFixed(2)}`);
