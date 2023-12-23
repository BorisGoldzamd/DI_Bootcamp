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
    switch (true) {
        case userNumber === computerNumber:
            alert("WINNER");
            // Puedes añadir aquí cualquier lógica adicional después de ganar.
            break;
        case userNumber > computerNumber:
            alert("Your number is bigger than the computers, guess again");
            // Pide al usuario un nuevo número después de la alerta.
            break;
        case userNumber < computerNumber:
            alert("Your number is smaller than the computers, guess again");
            // Pide al usuario un nuevo número después de la alerta.
            break;
        default:
            alert("Unexpected case");
            break;
    }
}


