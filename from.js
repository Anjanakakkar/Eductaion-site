let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let usernameField = document.querySelector("#usernameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  usernameField.style.maxHeight = "0px";
  title.innerText = "Sign In";
  signinBtn.disabled = true;
  signupBtn.disabled = false;
};

signupBtn.onclick = function () {
  usernameField.style.maxHeight = "60px";
  title.innerText = "Sign Up";
  signupBtn.disabled = true;
  signinBtn.disabled = false;
};
