//Excersise 1
let x = 5
let y = 2

if (x > y ){
    console.log('x is a bigger number')
}else (console.log('y is bigger'))

//Excsersise 2
let newDog = 'Chihuahua';
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == 'Chihuahua'){
    console.log('I love Chihuahuas, its my favorite dog breed')
}else{
    console.log ('I dont care, I prefer cats')
}

//Excersise3
let userInput = prompt('Give me a number');
let number = parseInt(userInput);

function esParOImpar(number) {
    if (number % 2 === 0) {
        alert('par');
    } else {
        alert('impar');
    }
}

esParOImpar(number);

//excersise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let numUsers = users.length
    if (numUsers == 0){
        console.log('no one is online')
    }else if (numUsers == 1){
        console.log('the user <', [0], '> is online')
    }else if (numUsers == 2){
        console.log('the users <', [0], [1], '> are online')
    }else{
        console.log('the users <', [0], [1], '> and' +(numUsers -2)+ ' are online')
    }