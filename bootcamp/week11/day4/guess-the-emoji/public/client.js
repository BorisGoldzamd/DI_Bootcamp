const emojiContainer = document.getElementById('emoji-container');
const submitButton = document.getElementById('submit-btn');
const resultMessage = document.getElementById('result');

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🌞', name: 'Sun' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🎈', name: 'Balloon' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '📚', name: 'Book' },
    { emoji: '🎨', name: 'Painting' },
    { emoji: '🛸', name: 'UFO' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🎶', name: 'Music' },
    { emoji: '🏠', name: 'House' },
    { emoji: '🎮', name: 'Video Game' },
    { emoji: '🌻', name: 'Sunflower' },
    { emoji: '🍩', name: 'Donut' }
];

function showRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];

    emojiContainer.innerHTML = '';
    emojiContainer.textContent = randomEmoji.emoji;

    const options = [...emojis];
    options.splice(randomIndex, 1);
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.name;
        button.addEventListener('click', () => {
            checkAnswer(option.name, randomEmoji.name);
        });
        emojiContainer.appendChild(button);
    });
}

function checkAnswer(selectedName, correctName) {
    if (selectedName === correctName) {
        resultMessage.textContent = 'Correct!';
    } else {
        resultMessage.textContent = 'Incorrect. Try again.';
    }
}

showRandomEmoji();
submitButton.addEventListener('click', showRandomEmoji);
