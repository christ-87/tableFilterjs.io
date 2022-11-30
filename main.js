$(document).ready(function () {
  $("#example").DataTable();
});

const txtAnim = document.querySelector("h3");
new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 25,
})
  // .changeDelay(20)
  .typeString("<span></>HUDUMASOFT</span>")
  .pauseFor(300)
  .start();

// form submit

const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form-submit");
const loginErrorMsg = document.querySelector("#login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if ((username === "") & (password === "")) {
    loginErrorMsg.style.opacity = 1;
  } else {
    location.reload();
  }
});

// ====== Preloader ========
const loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
  loader.style.display = 'none'
})
