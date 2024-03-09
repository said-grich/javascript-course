let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

document.getElementById('submitGuess').onclick = function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;
    
    if (userGuess === randomNumber) {
        displayFeedback(`Congratulations! You got it right in ${attempts} guesses!`);
        endGame();
    } else if (attempts === maxAttempts) {
        displayFeedback('!!! GAME OVER !!! The number was ' + randomNumber);
        endGame();
    } else if (userGuess < randomNumber) {
        displayFeedback('Too low!');
    } else if (userGuess > randomNumber) {
        displayFeedback('Too high!');
    }
    
    document.getElementById('attempts').textContent = `Attempt: ${attempts} of ${maxAttempts}`;
    document.getElementById('guess').value = '';
};

document.getElementById('restart').onclick = function() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('restart').style.display = 'none';
};

function displayFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

function endGame() {
    document.getElementById('restart').style.display = 'block';
}

