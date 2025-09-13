const mainBody = document.querySelector("body");
const jsScript = document.querySelector("script");


// Main div
const container = document.createElement("div");
mainBody.insertBefore(container, jsScript);
container.className = "w-[30%] flex m-auto mt-[48vh]";

// containerChild
const containerChild = document.createElement("div");
containerChild.className = "relative";
container.appendChild(containerChild);

// Input
const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("placeholder", "password");
passwordInput.className =
  "border border-black border-2 w-[400px] h-[60px] p-2 text-xl";
containerChild.appendChild(passwordInput);

console.log(passwordInput);

// spanDiv
const spanDiv = document.createElement("div");
spanDiv.className = "absolute right-5 top-5";
containerChild.appendChild(spanDiv);

// span
const eyeIcon = document.createElement("span");
eyeIcon.className = "material-symbols-outlined cursor-pointer";
spanDiv.appendChild(eyeIcon);
eyeIcon.textContent = "visibility";

eyeIcon.addEventListener("click", typeChange);

function typeChange() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "visibility_off";
  } else if (passwordInput.type == "text") {
    passwordInput.type = "password";
    eyeIcon.textContent = "visibility";
  }
}

// Creating an element with attributes
// const textele = document.createElement("script");
// textele.setAttribute("src", "./practice.js");
// console.log(textele);
