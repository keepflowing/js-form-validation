const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + p.error");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;;

email.addEventListener("input", (event) => {
  if (!emailPattern.test(email.value)) {
    email.setCustomValidity("Please enter a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});
