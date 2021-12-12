 import { users} from "./data.js";
 function checkData(username, password, errores){
     let resultado =  users.find( a => a.email === username && a.password === password);
     if ( resultado ){
         //todo Aquí añadir funcion de la cookie
         /* TODO mensajes del login correcto
             redireccionamos a front page y se muestra un mensaje como “Hola, Maria” (por ejemplo, si la usuaria es Maria) */
       window.location.replace("index.html");
   }else
        /* TODO mensajes del login incorrecto
            Saldrá un mensaje de error en el formulario (los errores tendrán el color de error de la Paleta de Colores) */
       errores.innerHTML = 'Usuario o contraseña erronea'
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
 TODO Crear Cookies del nombre de usuario
    El nombre de usuario se guarda en una Cookie. Así al refrescar la página, seguirá saliendo el mensaje “Hola, Maria” 
*/
/* //crear cookies del nombre de usuario id=userlogin
  var today = new Date();
  var expiry = new Date(today.getTime() + 7 * 24 * 3600 * 1000);
  
  function setCookie(name, value) {
      document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
  //this should set the UserName cookie to the proper value;
  function storeValues(username) {
      setCookie("username", username);;
  
  }
    storeValues(resultUsername.username); */
  