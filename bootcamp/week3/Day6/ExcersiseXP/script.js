// //excersise 1
// const people = ["Greg", "Mary", "Devon", "James"];
// //remove greg
// people.shift();
// console.log(people);

// //replace james to jason
// people.splice(2,1,'Jason');
// console.log(people)

// //adding boris
// people.push('Boris');
// console.log(people);

// //using indexOf mary
// console.log(people.indexOf('Mary'))

// //coping names without boris or mary
// people.splice(0,1);
// people.splice(2,1);
// console.log(people)

// //because doesnt exist, thats why the answer is -1

// let last = people.indexOf(people.length-1)


// //Part II
// for (let i in people){
//     console.log(people[i])
// }


// //stoping at Devon
// people.push('boris')
// console.log(people)

// for (let i = 0; i < people.length; i++) {
//     if (people[i].nombre === 'Devon') {
//     console.log('Encontré a Devon');
//     break;
//     }
//     console.log("idk " + i);
// }


// //Excersise 2
// let colors = ['red','grey','blue','black', 'white'];
// for(let i = 0; i < colors.length; i++){
//     console.log('my '+ [i + 1] + ' favorite color is ' + colors[i])
// }

//excersise 3
// let number = parseInt(prompt('Pick a number'));

// while (number < 10) {
//     number = parseInt(prompt('Pick a number'));
// }

// alert('Ok, end.');
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log('the number of floors is ' + building.numberOfFloors);
// console.log('aparments in floor 1 ' + building.numberOfAptByFloor.firstFloor + 'numbers of aparments in floor 3 ' + building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1] + ' '+building.numberOfRoomsAndRent.dan[0])
// if(building.numberOfRoomsAndRent.sarah[1] < building.numberOfRoomsAndRent.dan[1] && building.numberOfRoomsAndRent.david[1] < building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log('we incresed dan rent to ' + building.numberOfRoomsAndRent.dan[1] )
// }else{
//     console.log('dan pays more than sarah and david')
// }

// //excersise5
// const family = {
//     familyName: "Smith",
//     numberOfMembers: 4,
//     city: "New York",
//     hasPets: true,
//     favoriteHobbies: ["Reading", "Cooking", "Traveling"],
//     mainIncomeSource: "Software Engineering",
//     isHappy: true,
// };

// for (let key in family) {
//     if (family.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

// for (let key in family) {
//     if (family.hasOwnProperty(key)) {
//         console.log(key + ": " + family[key]);
//     }
// }

//exc6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// for(let key in details){
//     if(details.hasOwnProperty(key)){
//         console.log(key + ' ' + details[key])
//     }
// }

//exc7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstLetter= [];
for (let i=0; i < names.length; i++){
    firstLetter.push(names[i][0])
}
firstLetter.sort()
console.log('name of the secret group '+ firstLetter.join(''))