let firstNumber = ""
let secondNumber = ""
let operator = ""
let numkeys = document.querySelectorAll(".key");
let opperators = document.querySelectorAll(".opp")
let getDisplay = document.querySelector(".output");
let equal = document.querySelector(".equal");
let currentState = "first";

function add(...args) {
    return args.reduce((total,item) => total + item)

};

function minus(...args) {
    return args.reduce((total,item) => total - item)
};

function multiply(...args) {
    return args.reduce((total,item) => total * item )
}

function divide(...args) {
    return args.reduce((total,item) => total / item )
}

function operate() {

}

function toDisplay(e) {
    const value = e.target.value
    if(currentState === "first") {
        firstNumber += value;
        getDisplay.textContent = firstNumber;
    
    } else {
        secondNumber += value;
        getDisplay.textContent = secondNumber;
    }
};

equal.addEventListener("click", function() {
    let result;
    switch(operator) {
        case "+" : result = add(parseInt(firstNumber), parseInt(secondNumber));
        break;
        case "-": result = minus(parseInt(firstNumber), parseInt(secondNumber));
        break;
        case "*": result = multiply(parseInt(firstNumber), parseInt(secondNumber));
        break;
        case "/": result = divide(parseInt(firstNumber), parseInt(secondNumber));
        break;
        default: result = "error"
        break;
    }
    getDisplay.textContent = result;
    firstNumber = result;
    secondNumber = "";
    return result;

});

opperators.forEach((opp) => {
        opp.addEventListener("click", function (e) {
            operator = e.target.value;
            currentState = "second" 
        })        
});

numkeys.forEach((num) => {
        num.addEventListener("click",toDisplay);
});
 
