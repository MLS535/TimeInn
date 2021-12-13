import {validarEmail, validarNombre, validarPassword} from './validation.mjs';
import {users} from "./data.js";

 //validacion del submit
  document.querySelector('#formSignup').addEventListener('submit', function (e) {
    e.preventDefault();
    let password = document.getElementById('passwd1').value;
    let confirmPassword = document.getElementById('passwd2').value;
    if (validarUsernameSalir() == false) {
        return false;
    } else if (validarEmailSalir() == false) {
        return false;
    } else if (validarPasswdSalir() == false) {
        return false;
    } else if (password != confirmPassword) {
        document.getElementById("errorpasswd2").innerHTML = "Las contraseñas no coinciden";
        return false;
    } else {
        document.getElementById("errorpasswd2").innerHTML = "";
        //TODO: funcion de localstorage
        window.location.replace("login.html");
    }
});

// validacion del email al salir del campo
function validarEmailSalir(){
    let email = document.getElementById('email').value;
    let resultEmail = validarEmail(email,users);
    if (typeof resultEmail == "string") {
        document.getElementById("erroremail").innerHTML = resultEmail;
        return false;
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }
}
document.getElementById("email").onmouseleave = function () {
validarEmailSalir();
}

// validacion del password al salir del campo
function validarPasswdSalir(){
let password = document.getElementById('passwd1').value;
let resultPassword = validarPassword(password);
if (typeof resultPassword == "string") {
    document.getElementById("errorpasswd1").innerHTML =  resultPassword;
    return false;
} else {
    document.getElementById("errorpasswd1").innerHTML = "";
}}
document.getElementById("passwd1").onmouseleave = function () {
validarPasswdSalir();
}

// validacion del username al salir del campo
function validarUsernameSalir(){
    let username = document.getElementById('username').value;
    let resultUsername = validarNombre(username,users);
    if (typeof resultUsername == "string") {
        document.getElementById("erroruser").innerHTML = resultUsername;
        return false;
    } else {
        document.getElementById("erroruser").innerHTML = "";
    }
}

document.getElementById("username").onmouseleave = function () {
    validarUsernameSalir();
}