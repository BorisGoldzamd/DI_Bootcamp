//loop exc 1
// for (let i=0; i <= 15; i++) {
//     if (i % 2 ===0){
//         console.log(i + ' is an even number')
//     }else console.log(i + ' is an odd number')
// }

// let n = 0
// while (n < 3){
//     n++;
//     console.log(n)
// }

let username = prompt('Please enter the correct username');

while (username != 'admin') {
    username = prompt('Please enter the correct username');
}

alert('Welcome admin');
