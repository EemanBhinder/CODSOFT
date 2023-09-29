// Variables to track user input and calculations
let input = "";
let currentOperator = "";
let result = 0;

// DOM elements
const display = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Add event listeners to buttons
buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    switch (buttonValue) {
        case "=":
            calculateResult();
            break;
        case "C":
            clearInput();
            break;
        default:
            addToInput(buttonValue);
            break;
    }
}

function addToInput(value) {
    input += value;
    display.value = input;
}

function calculateResult() {
    if (input) {
        try {
            result = eval(input);
            display.value = result;
            input = result.toString();
        } catch (error) {
            display.value = "Error";
            input = "";
        }
    }
}

function clearInput() {
    input = "";
    display.value = "";
}