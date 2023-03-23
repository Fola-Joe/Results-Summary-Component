const btn = document.querySelector('.btn');
const finalNum = document.querySelector('h2');
const level = document.querySelector('.level');
const body = document.querySelector('main');

// const firstInput = prompt("Input Reaction score");
// if (firstInput < 0 || firstInput > 100){
//     prompt("Please input numbers between 0 and 100")
// } 
// const secondInput = prompt("Input Memory score");
// if (secondInput < 0 || secondInput > 100){
//     prompt("Please input numbers between 0 and 100")
// } 
// const thirdInput = prompt("Input Verbal score");
// if (thirdInput < 0 || thirdInput > 100){
//     prompt("Please input numbers between 0 and 100")
// } 
// const fourthInput = prompt("Input Visual score");
// if (fourthInput < 0 || fourthInput > 100){
//     prompt("Please input numbers between 0 and 100")
// } 

function numbers() {
    const firstInput = prompt("Input Reaction score");
    if (firstInput < 0 || firstInput > 100){
        prompt("Please input numbers between 0 and 100")
    } 
    const firstNum = document.querySelector('.num-1-1');
    firstNum.innerText = firstInput;

    const secondInput = prompt("Input Memory score");
    if (secondInput < 0 || secondInput > 100){
        prompt("Please input numbers between 0 and 100")
    }
    const secondNum = document.querySelector('.num-1-2');
    secondNum.innerText = secondInput;
}

body.addEventListener('click', numbers());