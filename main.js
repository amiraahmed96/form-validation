var username = document.forms['vform']['username'],
    email = document.forms['vform']['email'],
    password = document.forms['vform']['password'],
    confpass = document.forms['vform']['confpass'],
    name_error = document.getElementById("name_error"),
    email_error = document.getElementById("email_error"),
    password_error = document.getElementById("password_error");
username.addEventListener('blur', namevarify, true);
email.addEventListener('blur', emailvarify, true);
password.addEventListener('blur', passwordvarify, true);

function validate() {
    if (username.value === "") {
        username.style.border = "2px solid red";
        name_error.textContent = "user name is required";
        username.focus();
        return false;
    }
    if (email.value === "") {
        email.style.border = "2px solid red";
        email_error.textContent = "email is required";
        email.focus();
        return false;
    }
    if (password.value === "") {
        password.style.border = "2px solid red";
        password_error.textContent = "password is required";
        password.focus();
        return false;
    }
    if (confpass.value === "") {
        confpass.style.border = "2px solid red";
        password_error.textContent = "you should confirm password";
        confpass.focus();
        return false;
    }
    if (password.value != confpass.value) {
        password.style.border = "2px solid red";
        confpass.style.border = "2px solid red";
        password_error.textContent = "two password are do not match";
        return false;
    }
}
function namevarify() {
    if (username.value !== "") {
        username.style.border = "2px solid black";
        name_error.textContent = "";
        return true;
    }  
}
function emailvarify() {
     if (email.value !== "") {
        email.style.border = "2px solid black";
        email_error.textContent = "";
        return true;
    }
}
function passwordvarify() {
    if (password.value !== "") {
        password.style.border = "2px solid black";
        password_error.textContent = "";
        return true;
    }
}