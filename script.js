let firstNumber = ""
let secondNumber = ""
let operator = ""
let numkeys = document.querySelectorAll(".key");
let opperators = document.querySelectorAll(".opp")
let getDisplay = document.querySelector("#output");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac")
let currentState = "first";
let result = ""
 
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

         function operate(opp, first, second ) {
        switch(opp) {
            case "+" : result = add(parseInt(first), parseInt(second));
            break;
            case "-": result = minus(parseInt(first), parseInt(second));
            break;
            case "*": result = multiply(parseInt(first), parseInt(second));
            break;
            case "/": result = divide(parseInt(first), parseInt(second));
            break;
            default: result = "error"
            break;
        }
        console.log(`first num: ${firstNumber}`)
        console.log(`second num: ${secondNumber}`)
        console.log(`result: ${result}`)
        getDisplay.textContent = result;
        firstNumber = result;
        secondNumber = ""
        console.log(`first num: ${firstNumber}`)
        console.log(` sec num ${secondNumber}`)
        return result;

        
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
    if(secondNumber) {
    operate(operator,firstNumber,secondNumber)
    operator = ""
    secondNumber = ""
    currentState = "second"
    }
});

opperators.forEach((opp) => {
        opp.addEventListener("click", function (e) {
            operator = e.target.value;
            if(secondNumber) {
                operate(operator, firstNumber, secondNumber);
            } else if(currentState === "second") {
                secondNumber = result;
                operate(operator, firstNumber, secondNumber);
            }
            currentState = "second" 

            
        })        
});

numkeys.forEach((num) => {
        num.addEventListener("click",toDisplay);
});
 
ac.addEventListener("click", function() {
    firstNumber = ""
    secondNumber = ""
    getDisplay.textContent = ""
    currentState = "first"
})
