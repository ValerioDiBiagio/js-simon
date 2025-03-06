// elementi HTML

const countDownContainer = document.getElementById('countdown');
console.log(countDownContainer);

const instructionElement = document.getElementById('instructions');
console.log(instructionElement);

const numberForm = document.getElementById('answer-form');

const numberInput = document.querySelector('input');

const buttonElement = document.querySelector('button');

const numberList = document.getElementById('numbers-list');


// creazione countdown

let count = 30;
let countDownNum = setInterval(countDown, 1000);

function countDown () {
    countDownContainer.innerHTML = count;
    count--;

    if (count === -1) {
        clearInterval(countDownNum);
        instructionElement.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
    }
}

// generare 5 numeri random

function randomNumbers (min, max) {
    const casualArray = [];
    const arrayLen = 5;

    for (let i = 0; i < arrayLen; i++) {

        const casualNumbers = Math.ceil((Math.random()* max - min)+ min);
        casualArray.push(casualNumbers);
    }
    return casualArray;
}

const computerNumbers = randomNumbers(1, 50);
console.log(computerNumbers);

// creazione di li per contenere numeri random

for ( i = 0; i < computerNumbers.length; i++) {

    currentNumber = computerNumbers[i];
    const listElement = document.createElement('li');
    listElement.innerHTML = currentNumber;
    numberList.appendChild(listElement);
}