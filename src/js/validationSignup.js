import {validarEmail, validarNombre, validarPassword} from './validation.mjs';
//import {users} from "./data.js";

 //validacion del submit
  document.querySelector('#formSignup').addEventListener('submit', function (e) {
    e.preventDefault();
});

// validacion del email al salir del campo
function validarEmailSalir(){
    users1 = JSON.parse(dataInLocalStorage);
    let email = document.getElementById('email').value;
    let resultEmail = validarEmail(email,users1);
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
    users1 = JSON.parse(dataInLocalStorage);
    let username = document.getElementById('username').value;
    let resultUsername = validarNombre(username,users1);
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

//local storage
//var users1 = [];
var users1 = [];
var localStorageKeyName = 'data';
//function to store user name and password
var dataInLocalStorage = localStorage.getItem(localStorageKeyName);
function store(theForm) {

    var inputUsername= theForm["username"];
    var inputEmail = theForm["email"];
    var inputPassword= theForm["password"];
    //Creamos un array que almacena los usuarios y las contraseñas
    //var usuarios = JSON.parse(localStorage.getItem("usuarios")||"[]"); // get current objects


    if (dataInLocalStorage !== null) {
        users1 = JSON.parse(dataInLocalStorage);
    }
    var usuario = {
        username   : inputUsername.value,
        email      : inputEmail.value,
        password   : inputPassword.value,
    };

    //Hacemos un push de usuarios a usuario
   // usuarios.push(usuario); //push new one
    users1.push(usuario);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users1));
    console.log(usuario)

    //Se almacenan todos los usuarios en un array. Este array se almacen en el localStorage de Usuarios
    //
    //
    // localStorage.setItem("usuarios" ,JSON.stringify(usuarios))
  /*  var mensaje = document.getElementById('welcomeMessage');
    mensaje.innerHTML = ''; */
  //  localStorage.setItem("username", inputUsername.value);

  //  localStorage.setItem("password", inputPassword.value);
 //   document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
/*     users1.forEach(function (x) {
        mensaje.innerHTML ='hola '+ x.username;
        console.log (mensaje);
    }); */
    // window.localStorage.clear();
 return false;
} // end store()

//function to sign in
/* function login(theForm) {
    users1 = JSON.parse(dataInLocalStorage);
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputEmail = theForm["email"];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var email = inputEmail.value;
    var password = inputPassword.value;
       let resultado = users1.find(a => a.username === username);
        if (!resultado) {
            document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
        } else {
            document.getElementById('welcomeMessage').innerHTML = "Welcome " + username + "!";
        }
    } */


// end login()

var registro = document.querySelector('#formSignup');
if (  registro){
    registro.addEventListener('submit', function (e){
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
            store(this);
            
            window.location.replace("login.html");
        }
    })
}else {
    document.getElementById('signon').addEventListener('submit', function (e){
        e.preventDefault();
        login(this);
    })
}