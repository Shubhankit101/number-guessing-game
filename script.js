'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
//number will remain between 1 and 20. As well decimal values will be removed
document.querySelector('.number').textContent = secretNumber;
//Creating a score variable 
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);    
//console.log(document.querySelector('.guess').value);   
console.log(guess, typeof guess);


if(!guess) {
    document.querySelector('.message').textContent = 'Number Not Present!';
}
else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Congratulations you Guessed Correctly';
}
else if(guess > secretNumber){
    if(score > 1){
    score--;
    document.querySelector('.message').textContent = 'Too high';
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You Lost!';
        document.querySelector('.score').textContent = 0;
    }
}
else if(guess < secretNumber){
    if(score > 1){
    score--;
    document.querySelector('.message').textContent = 'Too low';
    document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.message').textContent = 'You Lost!';
        document.querySelector('.score').textContent = 0;
    }
}   
});


