let leftOperand = "";
let rightOperand = "";
let operator = "";
const numbers = document.querySelector(".numbers");
const numBtns = Array.from(numbers.querySelectorAll("button"));
const display = document.querySelector("#display");

const operators = document.querySelector(".operators");
const operatorBtns = Array.from(operators.querySelectorAll("button"));
let isOperatorPressed = false;
let isEqualPressed = false;
const equalSign = document.querySelector("#equal");

const clearBtn = document.querySelector("#clear");
const backspace = document.querySelector("#left_arrow");
const decimalBtn = document.querySelector("#comma");

backspace.addEventListener("click", () => {
  let arr = display.textContent.split("");
  arr.pop();
  let newNum = arr.join("");
  if (display.textContent == leftOperand) {
    leftOperand = newNum;
    display.textContent = leftOperand;
  } else {
    rightOperand = newNum;
    display.textContent = rightOperand;
  }
});
clearBtn.addEventListener("click", () => {
  leftOperand = "";
  rightOperand = "";
  operator = "";
  display.textContent = "0";
  isOperatorPressed = false;
  isEqualPressed = false;
  decimalBtn.disabled = false;
});

operatorBtns.forEach((button) =>
  button.addEventListener("click", (e) => {
    decimalBtn.disabled = false;
    if (isOperatorPressed && rightOperand !== "") {
      let result = operate(operator, leftOperand, rightOperand);
      display.textContent = result;
      leftOperand = result;
      rightOperand = "";
      operator = e.target.textContent;
    } else {
      operator = e.target.textContent;
      isOperatorPressed = true;
    }
  }),
);

numBtns.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (isEqualPressed && operator === "") {
      leftOperand = "";
      isEqualPressed = false;
    }
    if (!isOperatorPressed) {
      leftOperand += e.target.textContent;
      display.textContent = leftOperand;
      if (display.textContent.includes(".")) {
        decimalBtn.disabled = true;
      } else {
        decimalBtn.disabled = false;
      }
    } else {
      rightOperand += e.target.textContent;
      display.textContent = rightOperand;
      if (display.textContent.includes(".")) {
        decimalBtn.disabled = true;
      } else {
        decimalBtn.disabled = false;
      }
    }
  });
});

equalSign.addEventListener("click", () => {
  let result = operate(operator, leftOperand, rightOperand);
  display.textContent = result;
  leftOperand = result;
  rightOperand = "";
  operator = "";
  isOperatorPressed = false;
  isEqualPressed = true;
  decimalBtn.disabled = false;
});

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) return "🙄 ugh! Just don't!";
  return num1 / num2;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator == "" || num1 == "" || num2 == "") return "0";

  if (operator == "+") return add(num1, num2);

  if (operator == "-") return subtract(num1, num2);

  if (operator == "*") return multiply(num1, num2);

  if (operator == "/") return divide(num1, num2);
}
