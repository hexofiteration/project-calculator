let leftOperand = "";
let rightOperand = "";
let operator = "";
const numbers = document.querySelector(".numbers");
const numBtns = Array.from(numbers.querySelectorAll("button"));
const display = document.querySelector("#display");

const operators = document.querySelector(".operators");
const operatorBtns = Array.from(operators.querySelectorAll("button"));
let isOperatorPressed = false;

const equalSign = document.querySelector("#equal");

operatorBtns.forEach(button => button.addEventListener("click", () => {
    operator = button.textContent;
    isOperatorPressed = true;
}));

numBtns.forEach(element => {
    element.addEventListener("click", (e) => {
    if (!isOperatorPressed) {
        leftOperand += e.target.textContent;
        display.textContent = leftOperand;
    } else {
        rightOperand += e.target.textContent;
        display.textContent = rightOperand;
    }
    console.log(`${leftOperand} ${operator} ${rightOperand}`);
});
});

equalSign.addEventListener("click", () => {
    display.textContent = operate(operator, leftOperand, rightOperand);
});

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
