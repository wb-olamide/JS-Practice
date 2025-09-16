const signupEl = document.getElementById("signupForm");
const emailEl = document.getElementById("email");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const signupFormEl = document.getElementById("signupForm");
const errorText = document.getElementById("error-text");

const signupBtn = document.getElementById("signup-Btn");

const baseUrl = "https://dummyjson.com/users";

const usersList = JSON.parse(localStorage.getItem("userslist")) || [];

class User {
  constructor(email, firstName, lastName, password) {
    (this.email = email),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.password = password);
  }

  async signUp() {
    const usersList = JSON.parse(localStorage.getItem("userslist")) || [];

    const checkEmail = usersList.find(
      (usermail) => usermail.email === this.email
    );
    if (checkEmail) {
      errorText.textContent = "email already exist";
      return;
    }
    // console.log(checkEmail);

    const fields = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    };

    try {
      signupBtn.textContent = "Processing.....";
      signupBtn.style = "disabled";
      const response = await fetch(`${baseUrl}/add`, options);
      const data = await response.json();
      signupBtn.textContent = "Redirecting.....";

      console.log(data);
      console.log(response);
      if (response.ok) {
        usersList.push(fields);
        localStorage.setItem("userslist", JSON.stringify(usersList));
        alert("Welcome to Instagram. Redirecting.....");
        window.location.href = "./login.html";
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }
}

const handlesignup = () => {
  errorText.textContent = "";
  if (!emailEl.value) {
    errorText.textContent = "Email is required";
    return;
  }
  if (!firstName.value) {
    errorText.textContent = "Firstname is required";
    return;
  }
  if (!lastName.value) {
    errorText.textContent = "Lastname is required";
    return;
  }
  if (!password.value) {
    errorText.textContent = "Password is required";
    return;
  }

  new User(
    emailEl.value,
    firstName.value,
    lastName.value,
    password.value
  ).signUp();
};
signupFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  handlesignup();
});
