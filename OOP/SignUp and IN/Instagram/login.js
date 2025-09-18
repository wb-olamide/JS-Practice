// const emailEl = document.getElementById("email");
// const password = document.getElementById("password");
// const signupFormEl = document.getElementById("signupForm");
// const errorText = document.getElementById("error-text");
// const signupBtn = document.getElementById("signup-Btn");

// const usersList = JSON.parse(localStorage.getItem("userslist"));
// const baseUrl = "https://dummyjson.com/users";

// // const logIn = () => {
// //   const usersCheck = usersList.find((search) => search.email == emailEl.value);

// //     errorText.textContent = "";
// //   if (usersCheck) {
// //     // console.log(usersCheck.email);
// //     if (usersCheck.password == password.value) {
// //       console.log("Loggin in");
// //     } else {
// //       errorText.textContent = "Invalid email or Password";
// //     }

// //     return;
// //   }
// // };

// // signupFormEl.addEventListener("submit", (e) => {
// //   e.preventDefault();
// //   logIn();
// // });

// class User {
//   constructor(email, password) {
//     (this.email == email), (this.password == password)

//   }

//  async login(){

//   const response = await fetch(`${baseUrl}`)

//   }
// }

const formEl = document.getElementById("login-form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const loginBtnEl = document.getElementById("login-btn");
const errorMessage = document.getElementById("error-message");
const baseUrl = "https://dummyjson.com";

// import / export
class USer {
  constructor(email, firstName, lastName, password) {
    (this.email = email),
      (this.firstName = firstName),
      (this.password = password),
      (this.lastName = lastName);
  }

  // SIGNUP
  // async signup() {
  //   // check if email already exists
  //   const users = JSON.parse(localStorage.getItem("users")) || [];
  //   console.log(users);

  //   const userExist = users.find((ele) => ele.email == this.email);
  //   if (userExist) {
  //     errorMessage.textContent = "Email already exists";
  //     return;
  //   }
  //   const user = {
  //     firstName: this.firstName,
  //     lastName: this.lastName,
  //     email: this.email,
  //     password: this.password,
  //   };

  //   signupBtnEl.textContent = "Processing...";
  //   signupBtnEl.disabled = true;

  //   try {
  //     const res = await fetch(`${baseUrl}/users/add`, {
  //       method: "POST",
  //       body: JSON.stringify(user),
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await res.json();
  //     if (res.ok) {
  //       users.push(user);
  //       localStorage.setItem("users", JSON.stringify(users));
  //       alert("Welcome to Instagram. Redirecting...");
  //       window.location.href = "../../instagram/login.html";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     signupBtnEl.textContent = "Sign up";
  //     signupBtnEl.disabled = false;
  //   }
  // }

  //login

  async login(email, password) {
    // check if use exist
    const usersList = JSON.parse(localStorage.getItem("userslist")) || [];
    console.log(usersList);

    const user = usersList.find((user) => user.email === email);
    console.log(user);

    if (!user) {
      errorMessage.textContent = "Email or password is incorrect";
      return;
    }
    if (password !== user.password) {
      errorMessage.textContent = "Email or password is incorrect";
      return;
    }

    loginBtnEl.textContent = "Processing...";
    loginBtnEl.disabled = true;
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ username: "emilys", password: "emilyspass" }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      alert(`Welcome back ${user.firstName}!. Redirecting...`);
      window.location.href = "./dashboard.html";
    } catch (error) {
      console.log(error);
    } finally {
      loginBtnEl.textContent = "Log in";
      loginBtnEl.disabled = false;
    }
    // confirm password match
  }
}

const handleLogin = () => {
  errorMessage.textContent = "";
  if (!emailEl.value) {
    // "", null, undefined, 0
    errorMessage.textContent = "Email is required";
    return;
  }
  if (!passwordEl.value) {
    // "", null, undefined, 0
    errorMessage.textContent = "Password is required";
    return;
  }

  new USer().login(emailEl.value, passwordEl.value);
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLogin();
});
