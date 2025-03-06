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

const countDownContainer = document.getElementById('countdown');
console.log(countDownContainer);

const instructionElement = document.getElementById('instructions');
console.log(instructionElement);

