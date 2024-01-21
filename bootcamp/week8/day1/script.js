// /**
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this
// exercise (but not y).
// The input string will only consist of lower case letters
// and/or spaces.

// "The input string will only consist of lower case letters and"
//  */

// // Function to get the vowels from a string
// function getVowels(inputString) {
//     const vowels = [];
  
//     // Convert the string to lowercase for case-insensitive comparison
//     inputString = inputString.toLowerCase();
  
//     // Iterate over each character in the string
//     for (let i = 0; i < inputString.length; i++) {
//       const character = inputString[i];
  
//       // Check if the character is a vowel
//       if (['a', 'e', 'i', 'o', 'u'].includes(character)) {
//         vowels.push(character);
//       }
//     }
  
//     return vowels;
//   }
  
//   const myString = "The input string will only consist of lower case letters and";
//   const vowelsInString = getVowels(myString);
  
//   console.log("Vowels in the string:", vowelsInString);


// function add() {
//   let counter = 0;
//   function plus() {
//       counter += 1;
//       console.log(counter) ;
//   }
//   plus();  
// }

// add()

// let add = (function () {
//   let counter = 0;
//   function calculus() {
//       counter += 1; 
//       return counter
//   }
//   return calculus
// })();

// add();
// add();
// add();

const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}