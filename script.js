'use strict';

document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);    
//console.log(document.querySelector('.guess').value);   
console.log(guess, typeof guess);

if(!guess) {
    document.querySelector('.message').textContent = 'Number Not Present!';
}
});
