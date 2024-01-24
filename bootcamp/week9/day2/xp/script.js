// 🌟 Exercise 1 : Location
// // Instructions
// // Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;


//2
function displayStudentInfo(objUser){
    return console.log(`Your full name is ${objUser.first}  ${objUser.last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});



//3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const entries = Object.entries(users);
console.log(entries);

Object.keys(users).forEach(key => {
  users[key] *= 2;
});

console.log(users)


//5 4

//6 false, false

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    sound(noise) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${noise}`;
    }
  }
  
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('moos'));
  