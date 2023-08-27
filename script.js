'use strict';
//Selecting an Element
console.log(document.querySelector('.message').textContent);

//DOM

/*
Document Object Model: Structured representation of HTML Document.
Allows JS to access HTML element and styles to Manipulte them.

DOM is automaticallly created by the browser as soon as 
the html page loads and its stored in a tree structure like this one.

*/

document.querySelector('.message').textContent = '😀 Correct Number!';

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 67;
console.log(document.querySelector('.guess').value);
