let inputSign = document.querySelectorAll(".inputSign");
let userName = document.querySelector("#NameSign");
let userEmail = document.querySelector("#emailSign");
let userPass = document.querySelector("#passwordSign");
let btn = document.querySelector("#btnSignUp");
let message = document.querySelector(".message")
btn.addEventListener('click', signUp)



// Function to sign Up

var userData;
if (localStorage.getItem("all data")) {
    userData = JSON.parse(localStorage.getItem("all data"))

} else {
    userData = [];

}

function signUp() {
    InputsValidation();
    emailISExit();

    if (InputsValidation() && !emailISExit()) {
       let info = {
            Name: userName.value,
            password: userPass.value,
            userEmail: userEmail.value
        }
        userData.push(info)
        localStorage.setItem('all data', JSON.stringify(userData))
        message.innerHTML = "success"


    }
}

function InputsValidation() {
    nameInputValidation();
    emailInputValidation();
    passwordInputValidation();

    if ((nameInputValidation() == true && emailInputValidation() == true && passwordInputValidation() == true)) {
        return true
    }
    else {
        return false
    }
}
function passwordInputValidation() {
    const regex = /^.{5,15}$/;
    if (regex.test(userPass.value)) {
        userPass.classList.add("is-valid")
        userPass.classList.remove("is-invalid")
        userPass.nextElementSibling.innerHTML = "";

        return true
    }
    else {
        userPass.classList.add("is-invalid")
        userPass.classList.remove("is-valid")
        userPass.nextElementSibling.innerHTML = "Enter valid Password";
        return false
    }
}
function emailInputValidation() {
    const regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmail.value)) {
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        userEmail.nextElementSibling.innerHTML = "";

        return true
    }
    else {
        userEmail.classList.add("is-invalid")
        userEmail.classList.remove("is-valid")

        userEmail.nextElementSibling.innerHTML = "Enter valid email";
        return false
    }
}
function nameInputValidation() {
    const regex = /^\w{3,}(\s+\w+)*$/
    if (regex.test(userName.value) && userName.value !== "") {
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        userName.nextElementSibling.innerHTML = "";

        return true
    }
    else {
        userName.classList.add("is-invalid")
        userName.classList.remove("is-valid")
        userName.nextElementSibling.innerHTML = "Enter valid Name";
        return false
    }
}



// function to check if email already exit

function emailISExit() {
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email == userEmail.value) {
            userEmail.classList.add("is-invalid")
            userEmail.nextElementSibling.innerHTML = "Enter valid name";
            return true


        } else {
            return false;
        }

    }
}


