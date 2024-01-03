let Btn = document.querySelector("#signInBtn")
let userEmail = document.querySelector("#emailSign");
let userPass = document.querySelector("#passwordSign");
let ancor = document.querySelector('.ancor')
var userData = [];
userData = JSON.parse(localStorage.getItem('all data'))

console.log(userData);


Btn.addEventListener('click', login)
function login() {
    console.log(userEmail.value);
    if (userEmail.value == "" || userPass.value == "") {
        document.querySelector("#InputsSignIn").nextElementSibling.innerHTML = "Enter main Information"
        userEmail.classList.add("is-invalid");
        userPass.classList.add("is-invalid");
    }


    for (let i = 0; i < userData.length; i++) {
        if (userData[i].userEmail == userEmail.value && userData[i].password == userPass.value) {
            userEmail.classList.add("is-valid");
            userEmail.classList.remove("is-invalid");
            userPass.classList.add("is-valid");
            userPass.classList.remove("is-invalid");
            localStorage.setItem('currentSession', userData[i].Name)
            ancor.setAttribute("href", "welcome");
            alert("Welcome dear   "   +     userData[i].Name);

        } else{
        document.querySelector("#InputsSignIn").nextElementSibling.innerHTML = "Email or Password in correct"

        }
    }
}
username = localStorage.getItem("currentSession")










