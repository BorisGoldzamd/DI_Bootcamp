//Excersise 1
let favoriteFood = 'Tofu';
let favoriteMeal = 'Breakfast'
console.log('I love eating ' + favoriteFood + ' at ' + favoriteMeal)

//Excersise 2
const myWatchedSeries = ["black mirror ", " money heist", " the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
console.log('I watched ' + myWatchedSeriesLength +' series : ' + myWatchedSeries)

//part2
myWatchedSeries.splice(2,1,"Friends")
console.log(myWatchedSeries)

//add another series
myWatchedSeries.push('Fauda')
console.log(myWatchedSeries)

myWatchedSeries.unshift('The Office')
console.log(myWatchedSeries)

myWatchedSeries.splice(1,1)
console.log(myWatchedSeries)

console.log(myWatchedSeries[1][2])


//Excersise3
let temperatureC = prompt('How is the temperature in Celcius?')
let calcTemperatureF = (temperatureC * 9/5) + 32;
alert('Your temperature is ' + calcTemperatureF + ' f')


//excersise4/5/6
console.log(3 + 4 + '5'); 75.


