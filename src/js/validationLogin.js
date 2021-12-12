 import { users} from "./data.js";

function checkData(username, password, errores){
    let resultado =  users.find( a => a.email === username && a.password === password);
   if ( resultado ){
       //todo Aquí añadir funcion de la cookie
       window.location.replace("index.html");
   }else
       errores.innerHTML = 'Usuario o contraseña erronea'
   }
   
   /* function checkEmail(email, errores){
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
   } */
   
   var submit = document.querySelector('.loginButton');
   
   submit.addEventListener("click", function (e){
       e.preventDefault();
       let errores = document.getElementById('erroreslogin');
       //Añadir preventDefault y cambiar a submit el boton para que no se actualice y se pierda info
       let username = document.getElementById('userlogin').value;
       let passwdlogin = document.getElementById('passwdlogin').value;
       checkData(username, passwdlogin, errores);
   }); 