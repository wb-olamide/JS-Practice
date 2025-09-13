// function
// declaration functions

(function greet() {
  console.log("Hello everyone");
})(); //Self incocation

// greet()

// anonymous function
(function () {
  console.log("Heyyy");
})();

// arrow
let myFunc = () => {
  console.log("SQI College");
};
myFunc();
console.log(myFunc);

// Parametized function
function nums(x = "tolu", y = "tope") {
  console.log(`welcome ${y}`);
}
nums("sola");

function greet() {
  console.log("Welcome to SQI");
}
function MyFunc() {
  greet();
}
myFunc();

let firstNum = 6;
let secondNum = 8;

console.log(++firstNum + firstNum++ + --firstNum);
console.log(firstNum);

