'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
//number will remain between 1 and 20. As well decimal values will be removed
document.querySelector('.number').textContent = secretNumber;

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
});

