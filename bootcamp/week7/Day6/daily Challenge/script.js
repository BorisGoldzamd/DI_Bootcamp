// Task 1: Create an array of usernames with an exclamation point at the end
const usernames = [];
gameInfo.forEach((player) => {
  usernames.push(player.username + "!");
});
console.log(usernames); // Output: ["john!", "becky!", "susy!", "tyson!"]

// Task 2: Create an array of usernames of players with a score bigger than 5
const winners = [];
gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners); // Output: ["becky", "susy"]

// Task 3: Find and display the total score of the users
let totalScore = 0;
gameInfo.forEach((player) => {
  totalScore += player.score;
});
console.log("Total Score:", totalScore); // Output: Total Score: 71
