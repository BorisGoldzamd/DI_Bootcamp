function playTheGame() {
    let firstQuestion = confirm('Do you want to play a game?');

    if (firstQuestion === false) {
        console.log('No problem, good bye');
    } else {
        let userInput = prompt('Let\'s play, please, pick a number between 1 and 10:');
        let userNumber = parseFloat(userInput);

        if (!isNaN(userNumber)) {
            if (userNumber < 1 || userNumber > 10) {
                console.log('Not a good number, sorry. Good bye.');
            } else {
                let computerNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

                console.log('Computer\'s number: ' + computerNumber);

                if (userNumber === computerNumber) {
                    console.log('Congratulations! You guessed the correct number.');
                } else {
                    console.log('Sorry, your guess is incorrect. Better luck next time.');
                }
            }
        } else {
            console.log('That\'s not a number. Good bye.');
        }
    }
}

function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;

    while (attempts < 3) {
        attempts++;

        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            alert("Your number is bigger than the computer’s, guess again");
        } else {
            alert("Your number is smaller than the computer’s, guess again");
        }

        // Solicitar al usuario un nuevo número después de cada intento
        userNumber = parseFloat(prompt('Enter a new number:'));
    }

    alert("Out of chances");
}

// Ejemplo de uso:
// Supongamos que userNumber y computerNumber son variables con valores.
// Luego, puedes llamar a la función de la siguiente manera:
// compareNumbers(userNumber, computerNumber);





