const getDisplay = document.getElementById("display");
const getHistory = document.getElementById("history");
// alert(getDisplay.innerText);
const getNum = document.getElementById("number");
function numdisplay() {
  getDisplay.innerText += getNum.innerText;
}

function clearText() {
  //   if ((getDisplay.innerText = "0")) {
  //     getDisplay.innerText = "";
  //   }
  getDisplay.innerText = "0";
}

// function textLenght() {
//   getDisplay.innerText = getDisplay.innerText.substr;
// }
// if (this.id == "backspace") {

//     getDisplay.innerText = getDisplay.substr(0, getDisplay.lenght - 1);
// }

// function textLenght(params) {
    
// }

let numberText = document.getElementById("inp");
let resultText = document.getElementById("displayResult");

let firstOperand;
let secondOperand;
let result;

let isResultText = false;
let isDisplayText = false;

function displayNum(num) {
    if (numberText.innerText == 0) {
        numberText.innerText = "";
    }
    if (isDisplayText == true) {
        numberText.innerText = "";
        isDisplayText = false;
    }
    if (isResultText == true) {
        numberText.innerText = "";
        isResultText = false;
    }
    if (resultText.innerText.endsWith('=')) {
        resultText.innerText = "";
    }
    numberText.innerText = numberText.innerText + num;
}

function displayOperandResult(operand) {
    resultText.innerText = numberText.innerText + operand;
    firstOperand = Number(numberText.innerText);
    isDisplayText = true;
}

function singleDigitOperator(operator) {
    let singleDigit = Number(numberText.innerText);

    if (operator == "-") {
        result = - singleDigit;
    }
    if (operator == "x^2") {
        result = singleDigit * singleDigit;
        resultText.innerText = sqr(${singleDigit})
    }
    if (operator == "1/x") {
        result = 1 / singleDigit;
        resultText.innerText = 1/(${singleDigit})
    }
    if (operator == "2|x") {
        result = Math.sqrt(singleDigit);
        resultText.innerText = |(${singleDigit})
    } 
    numberText.innerText = result;
}

function displayResult() {
    secondOperand = numberText.innerText;

    if (resultText.innerText.endsWith('+')) {
        result = firstOperand + Number(secondOperand);
        resultText.innerText = String(firstOperand) + "+" + secondOperand + "=";
    }
    if (resultText.innerText.endsWith('-')) {
        result = firstOperand - Number(secondOperand);
        resultText.innerText = String(firstOperand) + "-" + secondOperand + "=";
    }
    if (resultText.innerText.endsWith('/')) {
        result = firstOperand / Number(secondOperand);
        resultText.innerText = String(firstOperand) + "/" + secondOperand + "=";
    }
    if (resultText.innerText.endsWith('*')) {
        result = firstOperand * Number(secondOperand);
        resultText.innerText = String(firstOperand) + "*" + secondOperand + "=";
    }

    numberText.innerText = result;
    isResultText = true;
    // resultText.innerText = "";
}

function deleteNum() {
    let lastTextDel = numberText.innerText
    numberText.innerText = lastTextDel.slice(0, -1);
    if (numberText.innerText == "") {
        numberText.innerText = "0";
    } 
}

function clearNum() {
    // let getUserInput = document.getElementById("inp");
    numberText.innerText = "0";
    resultText.innerText = "";
}