// function display() {
//   let numImput = document.getElementById("number");
//   let numDisplay = document.getElementById("display");
//   numDisplay.innerText = numImput.innerText;
// }
// function clear() {
//   let numDisplay = document.getElementById("display");
//   numDisplay.innerText = "0";

//   //   let clearFunc = " ''";
// }

let getNumDisplay = document.getElementById("display");
let getHistory = document.getElementById("history");
let firstOperand;
let secondOperand;
let displayTextFormat = false;
let result;

function number(num) {
  if (getNumDisplay.innerText == "0") {
    getNumDisplay.innerText = "";
  }
  if (displayTextFormat == true) {
    getNumDisplay.innerText = "";
    displayTextFormat = false;
  }
  getNumDisplay.innerText = getNumDisplay.innerText + num;
}

function operatorKey(operator) {
  getHistory.innerText = getNumDisplay.innerText + operator;
  firstOperand = Number(getNumDisplay.innerText);
  displayTextFormat = true;
}
function singleClickOperator(clicker) {
  let singleClick = Number(getNumDisplay.innerText);

  if (clicker == "-") {
    result = -singleClick;
  } else if (clicker == "**") {
    result = singleClick * singleClick;
    // getHistory.innerText = `sqr ($(singleClick))`;
    getHistory.innerText = "sqr" + "(" + singleClick + ")";
  } else if (clicker == "1/x") {
    result = 1 / singleClick;
    getHistory.innerText = "1" + "/" + "(" + singleClick + ")";
  } else if (clicker == "2/x") {
    result = Math.sqrt(singleClick);
    getHistory.innerText = "√" + "(" + singleClick + ")";
  } else if (clicker == "1/100") {
    result = singleClick / 100;
    getHistory.innerText = "(" + singleClick + ")" + "/" + "100";

    // getHistory.innerText = "1" + "/" + singleClick;
  }

  getNumDisplay.innerText = result;
}

function operatorCalc() {
  secondOperand = getNumDisplay.innerText;
  if (getHistory.innerText.endsWith("*")) {
    getHistory.innerText = firstOperand + "*" + secondOperand + "=";
    getNumDisplay.innerText = firstOperand * Number(secondOperand);
  } else if (getHistory.innerText.endsWith("/")) {
    getHistory.innerText = firstOperand + "/" + secondOperand + "=";
    getNumDisplay.innerText = firstOperand / Number(secondOperand);
  } else if (getHistory.innerText.endsWith("+")) {
    getHistory.innerText = firstOperand + "+" + secondOperand + "=";
    getNumDisplay.innerText = firstOperand + Number(secondOperand);
  } else if (getHistory.innerText.endsWith("-")) {
    getHistory.innerText = firstOperand + "-" + secondOperand + "=";
    getNumDisplay.innerText = firstOperand - Number(secondOperand);
  }

  // alert(secondOperand);
}

function clearText() {
  getNumDisplay.innerText = "0";
  // let textDelete = getNumDisplay.innerText
}
function wipeAll() {
  getNumDisplay.innerText = "0";
  getHistory.innerText = "";
}
function deleteText() {
  getNumDisplay.innerText = getNumDisplay.innerText.slice(0, -1);
  if (getNumDisplay.innerText == "") {
    getNumDisplay.innerText = "0";
  }
}


// function calculateinput() {
//   getNumDisplay.innerText = eval(getNumDisplay.innerText);
// }

// function arith(ari) {
//   getHistory.innerText = getNumDisplay.innerText + ari;
// }

// function historyDisplay() {
//   getHistory.innerText = getNumDisplay.innerText;
// }
