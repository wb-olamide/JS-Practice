const htmlBody = document.querySelector("body");
const scriptjs = document.querySelector("script");
console.log(htmlBody);
// console.log(scriptjs);

const display = document.createElement("div");
display.textContent = "";
htmlBody.insertBefore(display, scriptjs);

const displayDiv = document.createElement("div");
display.appendChild(displayDiv);
displayDiv.innerText = "";

const textInput = document.createElement("input");
textInput.setAttribute("type", "text");
textInput.className = "w-[300px] block";
display.appendChild(textInput);

const firstButton = document.createElement("button");
firstButton.textContent = "click";
display.appendChild(firstButton);

// firstButton.addEventListener("click", () => {
//   displayDiv.innerText = textInput.value;
// });

// Arrow function test
let ADisplay = (a, b) => {
  console.log(a + b);

};
firstButton.addEventListener("click", ADisplay(13, 10));

// ADisplay(13, 10)

// firstButton.addEventListener("click", () => {
//   console.log("SQI College");
//     displayDiv.innerText = "Holaaa";

// });

// function dis() {
//   displayDiv.innerText = "Holaaa";
// }

// let displayRes = () => {
//   displayDiv.innerText = "Holaaa";
// };
// let myFunc = () => {
//   console.log("SQI College");
//     displayDiv.innerText = "Holaaa";

// };
// myFunc();

console.log(scriptjs);
