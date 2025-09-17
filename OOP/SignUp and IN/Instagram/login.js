const emailEl = document.getElementById("email");
const password = document.getElementById("password");
const signupFormEl = document.getElementById("signupForm");
const errorText = document.getElementById("error-text");
const signupBtn = document.getElementById("signup-Btn");

const usersList = JSON.parse(localStorage.getItem("userslist"));

const logIn = () => {
  const usersCheck = usersList.find((search) => search.email == emailEl.value);
 
    errorText.textContent = "";
  if (usersCheck) {
    // console.log(usersCheck.email);
    if (usersCheck.password == password.value) {
      console.log("Loggin in");
    } else {
      errorText.textContent = "Invalid email or Password";
    }

    return;
  }
};

signupFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});
