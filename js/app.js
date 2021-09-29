// target classes and id
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// create variables for them
let form = id("form");
username = id("username");
email = id("email");
password = id("password");

errorMsg = classes("error");
successIcon = classes("fa-check-circle");
failureIcon = classes("fa-exclamation-circle");

//  target form and add submit event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // implement newly created functions
  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});
console.log("i am working");
// create function to validate form
let engine = (id, serial, message) => {
  // create if else statement
  if (id.value.trim() === "") {
  } else {
  }
  // function to print error message
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
  } else {
    errorMsg[serial].innerHTML = "";
  }
  // make functions for icons to work properly
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

//make function for icons to work properly
// let engine = (id, serial, message) => {

// implement newly created functions
