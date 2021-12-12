/*
 TODO mensajes del login incorrecto
    Saldrá un mensaje de error en el formulario (los errores tendrán el color de error de la Paleta de Colores) 
 */

import { users} from "./data.js";

//TODO La validacion de los campos a de ser con expresiones regulares siempre que sea posible
/*
 TODO mensajes del login correcto
    redireccionamos a front page y se muestra un mensaje como “Hola, Maria” (por ejemplo, si la usuaria es Maria) 
*/


/* 
TODO validar el name 
    - no puede estar vacío
    - numero de caracteres entre 3 y 20
*/
function checkData(username, password, errores){
 let resultado =  users.find( a => a.email === username && a.password === password);
if ( resultado ){
    //todo Aquí añadir funcion de la cookie
    window.location.replace("index.html");
}else
    errores.innerHTML = 'Usuario o contraseña erronea'
}

function checkEmail(email, errores){
   let resultado = users.find(a =>
        a.email  === email )
    if ( resultado ){
        errores.innerHTML ='Email ya existe'
    }

}
function checkNameInData(name, errores){
    let resultado = users.find(a =>
        a.usuario  === name )
    if ( resultado ){
        errores.innerHTML ='El usuario ya existe'
    }
}

function  validarNombre(username, errores){
    if ( username.length < 3 || username.length >=20)
        return errores.innerText = "El numero de caracteres debe comprender entre 3 y 20";
}

var submit = document.querySelector('.loginButton');

submit.addEventListener("click", function (e){
    e.preventDefault();
    let errores = document.getElementById('erroreslogin');
    //Añadir preventDefault y cambiar a submit el boton para que no se actualice y se pierda info
    let username = document.getElementById('userlogin').value;
    let passwdlogin = document.getElementById('passwdlogin').value;
    checkData(username, passwdlogin, errores);
});

/* 
TODO validar el email 
    - valida al salir del campo (al perder el foco) 
    - no puede estar vacío
    - no debe existir en la Tabla de Usuarios
    - Patron de validacion:
        nombre@nombreorganizacion.tipo
        - nombre: solo la primera letra en mayúscula y el resto en minúscula
        - nombre de la organización: entre 5 y 10 minusculas
        - tipo: Solo pudeden ser com, net o gov
        - Solo puede haber una @ y un punto
*/
function validarEmail(email) {
    //la primera letra en mayúscula
    if (email.charAt(0) != email.charAt(0).toUpperCase()) return "El email debe empezar con una letra mayúscula";
    //el resto en minúscula
    if (email.substring(1).toLowerCase() != email.substring(1)) return "El email debe empezar con una letra mayúscula";

    //Solo pueden haber una @ y un punto
    if (email.indexOf("@") == -1) return "El email debe tener una @";
    if (email.indexOf(".") == -1) return "El email debe tener un punto";
    if (email.indexOf("@") > email.indexOf(".")) return "El email debe tener una @ antes del punto";
    // entr el @ y el punto, debe haber entre 5 y 10 minusculas
    if (email.substring(email.indexOf("@")+1, email.indexOf(".")).length < 5 || email.substring(email.indexOf("@")+1, email.indexOf(".")).length > 10) return "entr el @ y el punto, debe haber entre 5 y 10 minusculas";
    //despues del punto, solo puede haber com, net o gov
    if (email.substring(email.indexOf(".")+1) != "com" && email.substring(email.indexOf(".")+1) != "net" && email.substring(email.indexOf(".")+1) != "gov") return "despues del punto, solo puede haber com, net o gov";
    //Validar que el email no exista en la tabla de usuarios
    let dataEmail = {
        email: email
    };
    return dataEmail;
}

/*
TODO validar el password
    - valida al salir del campo (al perder el foco)
    - Muestra mensajes debajo de los campos para los errores que puedan suceder.
    - Patron de validacion:
        - Longitud mínima de siete caracteres
        - Incluir letras mayúsculas y minúsculas
        - Incluir números
        - Incluir caracteres espespeciales (por ejemplo, !, $, %, &, etc.)
*/
function validarPassword(password){
    //Longitud mínima de siete caracteres
    if (password.length < 6) return "La contraseña debe tener al menos 7 caracteres";
    //Incluir letras mayúsculas y minúsculas
    if (!password.match(/[a-z]/)) return "La contraseña debe incluir al menos una letra minúscula";
    if (!password.match(/[A-Z]/)) return "La contraseña debe incluir al menos una letra mayúscula";
    //Incluir números
    if (!password.match(/\d/)) return "La contraseña debe incluir al menos un número";
    //Incluir caracteres espespeciales (por ejemplo, !, $, %, &, etc.)
    if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) return "La contraseña debe incluir al menos un caracter especial";

    let dataPassword = {
        password: password
    };
    return dataPassword;

}

//validacion del submit
function validations() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('passwd1').value;
    let confirmPassword = document.getElementById('passwd2').value;
    let error =  document.getElementById("error");
    validarEmailSalir(email, error);
    validarPasswordSalir(password, error)
    if (password != confirmPassword) {
        error.innerHTML = "Las contraseñas no coinciden";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
};

// validacion del email al salir del campo
function validarEmailSalir(email, errores) {
    let resultEmail = validarEmail(email);
    if (typeof resultEmail == "string") {
        errores.innerHTML = "Error Email: "+ resultEmail;
        return false;
    } else {
        errores.innerHTML = "";
    }
}

// validacion del password al salir del campo
function validarPasswordSalir(password, errores) {
    let resultPassword = validarPassword(password);
    if (typeof resultPassword == "string") {
        errores.innerHTML = "Error Contraseña: "+ resultPassword;
        return false;
    } else {
        errores.innerHTML = "";
    }

}

