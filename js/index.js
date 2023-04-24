const inputUser = document.querySelector('#inputUser');
const inputPassword = document.querySelector('#inputPassword');
const buttonGo = document.querySelector("#buttonGo");

window.onload = () => {
  inputUser.addEventListener('click', () => {
    console.log('inputText');
  });
  inputPassword.addEventListener('click', () => {
    console.log('inputPassword');
  });
  buttonGo.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("object");
  });
};
