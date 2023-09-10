'use strict';
//Selecting an Element
//console.log(document.querySelector('.message').textContent);

//DOM

/*
Document Object Model: Structured representation of HTML Document.
Allows JS to access HTML element and styles to Manipulte them.

DOM is automaticallly created by the browser as soon as 
the html page loads and its stored in a tree structure like this one.

*/
/*
document.querySelector('.message').textContent = '😀 Correct Number!';

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 67;
console.log(document.querySelector('.guess').value);
*/
// const x = function() {
//     console.log(27);
// };
// console.log(typeof x);

//Math.random will always give us a new number
//const number = Math.random();

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//number will remain between 1 and 20. As well decimal values will be removed
document.querySelector('.number').textContent = secretNumber;
//Creating a score variable 
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(document.querySelector('.guess').value);   
    console.log(guess, typeof guess);


    if (!guess) {
        document.querySelector('.message').textContent = 'Number Not Present!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Congratulations you Guessed Correctly';
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number'). style.width = '30rem';
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