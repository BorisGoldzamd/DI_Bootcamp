// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// let n = 942; // Reemplaza esto con tu número
// let nStr = n.toString();
// let nArray = Array.from(nStr).map(Number);

// let suma = 0;

// // Suma los dígitos hasta obtener un solo dígito
// // while (nArray.length > 1) {
// //     suma = 0;
// //     for (let i = 0; i < nArray.length; i++) {
// //         suma += nArray[i];
// //     }
// //     nArray = Array.from(suma.toString()).map(Number);
// // }

// // console.log("El resultado final es:", suma);


// function oneDigit(sum) {
//     let arr = new String(sum).split('');
//     console.log(arr);
    
//     let newSum = 0; // Cambié el nombre de la variable para evitar conflictos
    
//     for (let i in arr) {
//         newSum += Number(arr[i]);
//     }

//     if (newSum < 10) {
//         return newSum;
//     }

//     return oneDigit(newSum);
// }

// console.log(oneDigit(205050));

function multiplyDigitsByTwo(num) {
    let numStr = num.toString();
    let resultArray = [];

    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        let multipliedDigit = digit * 2;
        resultArray.push(multipliedDigit);
    }

    return resultArray;
}

// Ejemplo de uso:
let result = multiplyDigitsByTwo(232333);
console.log(result);
