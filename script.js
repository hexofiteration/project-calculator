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

console.log(operate("+", "2", 5));
console.log(operate("-", 2, 5));
console.log(operate("*", 2, 5));
console.log(operate("*", 0, 5));
console.log(operate("/", 2, 0));
console.log(operate("/", 0, 5));