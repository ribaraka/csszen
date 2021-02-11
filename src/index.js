import './assets/css/style.css';
import './assets/css/panel.css';

const input = document.querySelector('.selector');
const buttonFind = document.querySelector('.selector-find');
const buttonNext = document.querySelector('.selector-next');
const buttonPrevious = document.querySelector('.selector-prev');
const buttonParent = document.querySelector('.nav-top');
const buttonFirstChild = document.querySelector('.nav-bottom');
const buttonPreviousSibling = document.querySelector('.nav-left');
const buttonNextSibling = document.querySelector('.nav-right');
let foundValues = [];
let indexOfFoundValues = 0;
let selector = null;

function selectorStyleOn(selector) {
    selector.style.outline = 'solid red 5px';
    selector.style.backgroundColor = 'lightblue';
}

function selectorStyleOff(selector){
    selector.style.outline = '';
    selector.style.backgroundColor = '';
}

function findValue () {
    if (selector){
        selectorStyleOff(selector);
    }
    indexOfFoundValues = 0;
    foundValues = Array.from(document.querySelectorAll(input.value));
    selector = foundValues[indexOfFoundValues];
    selectorStyleOn(selector);
    checkButton();
}

function checkButton() {
    buttonNext.disabled = foundValues[indexOfFoundValues + 1] === undefined;
    buttonPrevious.disabled = foundValues[indexOfFoundValues - 1] === undefined;
    buttonParent.disabled = selector.parentElement === null;
    buttonFirstChild.disabled = selector.firstElementChild === null;
    buttonPreviousSibling.disabled = selector.previousElementSibling === null;
    buttonNextSibling.disabled = selector.nextElementSibling === null;
}

function findNextValue() {
    selectorStyleOff(selector);
    indexOfFoundValues += 1;
    selector = foundValues[indexOfFoundValues];
    selectorStyleOn(selector);
    checkButton();
}

function findPreviousValue() {
    selectorStyleOff(selector);
    indexOfFoundValues -= 1;
    selector = foundValues[indexOfFoundValues];
    selectorStyleOn(selector);
    checkButton();
}

function findParentElement(){
    selectorStyleOff(selector);
    foundValues = selector;
    selector = selector.parentElement;
    selectorStyleOn(selector);
    checkButton();
}

function findFirstChildElement() {
    selectorStyleOff(selector);
    foundValues = selector;
    selector = selector.firstElementChild;
    selectorStyleOn(selector);
    checkButton();
}

function previousSibling(){
    selectorStyleOff(selector);
    foundValues = selector;
    selector = selector.previousElementSibling;
    selectorStyleOn(selector);
    checkButton();
}

function nextSibling(){
    selectorStyleOff(selector);
    foundValues = selector;
    selector = selector.nextElementSibling;
    selectorStyleOn(selector);
    checkButton();
}

buttonFind.addEventListener('click', findValue);
buttonNext.addEventListener('click', findNextValue);
buttonPrevious.addEventListener('click', findPreviousValue);
buttonParent.addEventListener('click', findParentElement);
buttonFirstChild.addEventListener('click', findFirstChildElement);
buttonPreviousSibling.addEventListener('click', previousSibling);
buttonNextSibling.addEventListener('click', nextSibling);

input.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    buttonFind.click();
  }
});
