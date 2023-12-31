'use script'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//number will remain between 1 and 20. As well decimal values will be removed
document.querySelector('.number').textContent = '?';

const displayMessage = function(message){
    
}
//Creating a score variable 
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'Number Not Present!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Congratulations you Guessed Correctly';
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number'). style.width = '30rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
    //When guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = 'Too low';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
//When clicking the again button. 
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#404079';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number'). style.width = '15rem';
});