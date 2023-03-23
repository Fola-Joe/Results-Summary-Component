const btn = document.querySelector('.btn');
const finalNum = document.querySelector('h2');
const level = document.querySelector('.level');
const body = document.querySelector('.left-side');


body.addEventListener('click', function numbers() {
    const firstInput = prompt("Input Reaction score");
    if (firstInput < 0 || firstInput > 100){
        prompt("Please input numbers between 0 and 100");
    } 
    const firstNum = document.querySelector('.num-1-1');
    firstNum.innerText = firstInput;

    const secondInput = prompt("Input Memory score");
    if (secondInput < 0 || secondInput > 100){
        prompt("Please input numbers between 0 and 100");
    }
    const secondNum = document.querySelector('.num-1-2');
    secondNum.innerText = secondInput;

    const thirdInput = prompt("Input Verbal score");
    if (thirdInput < 0 || thirdInput > 100){
        prompt("Please input numbers between 0 and 100");
    } 
    const thirdNum = document.querySelector('.num-1-3');
    thirdNum.innerText = thirdInput;

    const fourthInput = prompt("Input Visual score");
    if (fourthInput < 0 || fourthInput > 100){
        prompt("Please input numbers between 0 and 100");
    } 
    const fourthNum = document.querySelector('.num-1-4');
    fourthNum.innerText = fourthInput;

    btn.addEventListener('click', function addition(){
        let average = 0
        let sum = firstInput + secondInput + thirdInput + fourthInput;
        let base = 4;
        average = sum / base;
        finalNum.innerText = average;
    })
})