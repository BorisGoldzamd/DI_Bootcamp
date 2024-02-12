import people from './data.js';
console.log(people);

function calculateAverage(people){
    let sum = 0;
    people.forEach(person=>{
        sum+= person.age;
    });
    const average = sum / people.length;
    return average
};

const averageAge = calculateAverage(people);
console.log(averageAge)

