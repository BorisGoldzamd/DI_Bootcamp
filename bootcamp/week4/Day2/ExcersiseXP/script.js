//exc 1Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// function infoAboutMe(){
//     const myInfo = {
//     myName: 'Boris',
//     myAge: 24,
//     hobbies: 'league of legends',
// }
// return myInfo;
// }
// const borisInfo = infoAboutMe();

// console.log(borisInfo);
// // Part II : function with three parameters

// // Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// // The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// // Call the function twice with the following arguments:
// // infoAboutPerson("David", 45, "blue")
// // infoAboutPerson("Josh", 12, "yellow")

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(' your name is ' + personName + ' your age is ' + personAge + ' your favorite color is ' + personFavoriteColor);
// }
// infoAboutPerson('David', 35, 'blue')


//Excserise 2
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
// function calculateTip(){
//     let bill = prompt('amount of the bill = ');
//     let tip;
//     if (bill < 50) {
//         tip = bill * 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.1;
//     }

// alert('bill = ' + bill + ', tip = ' + tip);
// }
// calculateTip()
// // Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

//exc 3
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function isDivisible(){
    for(let i=0; i < 500; i++){
        if(i % 23 === 0){
            console.log(i)
        }
    }
}
isDivisible();
function isDivisible() {
    let sum = 0;  

    for (let i = 0; i < 500; i++) {
        if (i % 23 === 0) {
            console.log(i);  
            sum += i;         
        }
    }

    return sum; 
}

let sumResult = isDivisible();

console.log("divisible by 23: " + sumResult);
