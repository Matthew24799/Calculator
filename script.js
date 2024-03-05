let num1 = parseInt(prompt("Enter first number"));
let Operator = prompt("Enter Operator, +,-,*, or /");
let num2 = parseInt(prompt("Enter second number"));

if(!isNaN(Operator)) {
    Operator = prompt("MUST BE + , - , * OR / ");
};


function comeput() {
    let computation
    const firstNum = num1;
    const currentNum = num2;

    switch(Operator) {
     case "+": computation = firstNum + currentNum;
     break;
     case "-": computation = firstNum - currentNum;
     break;
     case "*": computation = firstNum * currentNum;
     break;
     case "/": computation = firstNum / currentNum;
     break;
    };
        return computation;
};

console.log("Num1: " + num1);
console.log("operator: " + Operator);
console.log("num2: " + num2);

console.log("Answer is: " + comeput());


