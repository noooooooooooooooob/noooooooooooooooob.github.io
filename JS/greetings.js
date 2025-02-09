const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginButton.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
//로그인 후
function paintGreetings(username) {
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("greeting");
    loginButton.classList.remove("btn", "btn-default", "btn-primary");
    loginButton.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    loginButton.classList.remove("btn", "btn-default", "btn-primary");
    loginButton.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}