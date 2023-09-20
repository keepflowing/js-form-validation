const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + p.error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + p.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + p.error");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + p.error");

const invalid = /^(.[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

email.addEventListener("input", (event) => {
  emailError.innerText = "";
  if (!email.validity.valid) {
    showEmailError();
  }
});

password.addEventListener("input", (event) => {
  passwordError.innerText = "";
  if (invalid.test(password.value)) {
    passwordError.innerText = "The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.";
  }
  else if (!password.validity.valid) {
    showPassError();
  }
});

country.addEventListener("input", (event) => {
  countryError.innerText = "";
});

zip.addEventListener("input", (event) => {
  zipError.innerText = "";
  if (!zip.validity.valid) {
    showZipError();
  }
});

function showZipError() {
  if (zip.validity.tooShort) {
    zipError.innerText = `The Zip code needs to be ${zip.minLength} digits long.`;
  }
}

function showPassError() {
  if (password.validity.tooShort) {
    passwordError.innerText = `The password needs to be at least ${password.minLength} characters long.`;
  }
}

function showEmailError() {
  if (email.validity.patternMismatch) {
    
    emailError.innerHTML = "Entered value needs to be an email address.<br>Example: john.smith@gmail.com";

  } else if (email.validity.tooShort) {

    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value === "") {
    emailError.innerText = "Please enter an email address.";
  }
  else if (!email.validity.valid) { 
    showEmailError();
  }
  if (password.value === "") {
    passwordError.innerText = "Please enter a password."
  }
  else if (invalid.test(password.value)) {
    passwordError.innerText = "The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.";
  }
  else if (!password.validity.valid) {
    showPassError();
  }
  if (country.value === "") {
    
    countryError.innerText = "Please select a country.";

  }
  if (zip.value === "") {
    zipError.innerText = "Please enter a Zip Code."
  }
  else if (!zip.validity.valid) {

    showZipError();

  }

  if (emailError.innerText === passwordError.innerText && countryError.innerText === zipError.innerText) {
    email.value = "";
    password.value = "";
    country.value = "";
    zip.value = "";
  }
});