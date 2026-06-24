let leftOperand = "";
let rightOperand = "";
let operator = "";
const numbers = document.querySelector(".numbers");
const numBtns = Array.from(numbers.querySelectorAll("button"));
const display = document.querySelector("#display");

const operators = document.querySelector(".operators");
const operatorBtns = Array.from(operators.querySelectorAll("button"));
let isOperatorPressed = false;


numBtns.forEach(button => button.addEventListener("click", () => {
    leftOperand += button.textContent;
    display.textContent = leftOperand;
    console.log(leftOperand);
}));

operatorBtns.forEach(button => button.addEventListener("click", () => {
    operator = button.textContent;
    isOperatorPressed = true;
    console.log(isOperatorPressed);
}));

if(isOperatorPressed === true) {
    numBtns.forEach(button => button.addEventListener("click", () => {
        rightOperand += button.textContent;
        display.textContent = rightOperand;
        console.log(rightOperand);
    }));
}
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){ 
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0) return "🙄 ugh! Just don't!";
    return num1 / num2;
}

function operate(operator, num1, num2){

    num1 = Number(num1);
    num2 = Number(num2);

	if (operator == "+" ) return add(num1, num2);

	if (operator == "-" ) return subtract(num1, num2);

	if (operator == "*") return multiply(num1, num2);

	if (operator == "/" ) return divide(num1, num2);
}
