const mainBody = document.querySelector("body");
const scriptjs = document.querySelector("script");
mainBody.style.backgroundColor = "orange";
// console.log(scriptjs);

// Wrap div
const mainDiv = document.createElement("div");
mainDiv.className = "w-[30%] flex justify-center mt-[48vh] m-auto text-red-500";
// mainDiv.textContent = "Hello world";
mainBody.insertBefore(mainDiv, scriptjs);
console.log(mainBody);

// Container
const container = document.createElement("div");
container.className = "m-auto flex items-center gap-2 relative";
// container.textContent = "Hollaaa";
mainDiv.appendChild(container);

// Input
const inputBox = document.createElement("input");
inputBox.setAttribute("type", "password");
inputBox.setAttribute("placeholder", "password");
inputBox.className =
  "w-[350px] text-white h-[60px] p-2 text-xl border-white border-2 border";

container.appendChild(inputBox);

// SpanDiv
const spanDiv = document.createElement("div");
spanDiv.className = "flex items-center absolute right-3";
container.appendChild(spanDiv);
// container.remove(spanDiv)

// Span
const visibility = document.createElement("span");
// console.log(visibility);
visibility.className = "material-symbols-outlined cursor-pointer text-white";
visibility.textContent = "visibility";

spanDiv.appendChild(visibility);

console.log("input");
// let showPassword = () => {
//   if (inputBox.type == "password") {
//     inputBox.type = "text";
//     visibility.textContent = "visibility_off";
//   } else if (inputBox.type == "text") {
//     inputBox.type = "password";
//     visibility.textContent = "visibility";
//   }
// };

// Functionality
visibility.addEventListener("click", () => {
  if (inputBox.type == "password") {
    inputBox.type = "text";
    visibility.textContent = "visibility_off";
  } else if (inputBox.type == "text") {
    inputBox.type = "password";
    visibility.textContent = "visibility";
  }
} );
// function showPassword() {
//   if (inputBox.type == "password") {
//     inputBox.type = "text";
//     visibility.textContent = "visibility_off";
//   } else if (inputBox.type == "text") {
//     inputBox.type = "password";
//     visibility.textContent = "visibility";
//   }
// }

// let showPassword = () => {
//   if (inputBox.type == "password") {
//     inputBox.type = "text";
//     visibility.textContent = "visibility_off";
//   } else if (inputBox.type == "text") {
//     inputBox.type = "password";
//     visibility.textContent = "visibility";
//   }
// };

// function eyeChange() {
//   if (visibility.textContent == "visibility") {

//   }

// }

// mainD = document.querySelector(".flex");

// console.log(mainD);

// mainDiv.insertBefore("container, ");

// var testText = document.createTextNode("Holaa");
// mainDiv.appendChild(testText);

// mainBody.appendChild(mainDiv);

// console.log(mainDiv);
// console.log();
