//excersise 1
const people = ["Greg", "Mary", "Devon", "James"];
//remove greg
people.shift();
console.log(people);

//replace james to jason
people.splice(2,1,'Jason');
console.log(people)

//adding boris
people.push('Boris');
console.log(people);

//using indexOf mary
console.log(people.indexOf('Mary'))

//coping names without boris or mary
people.splice(0,1);
people.splice(2,1);
console.log(people)

//because doesnt exist, thats why the answer is -1

let last = people.indexOf(people.length-1)


//Part II
for (let i in people){
    console.log(people[i])
}


//stoping at Devon
people.push('boris')
console.log(people)

for (let i = 0; i < people.length; i++) {
    if (people[i].nombre === 'Devon') {
    console.log('Encontré a Devon');
    break;
    }
    console.log("idk " + i);
}


