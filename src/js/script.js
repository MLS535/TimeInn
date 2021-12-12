/* 
 TODO Crear Cookies del nombre de usuario
    El nombre de usuario se guarda en una Cookie. Así al refrescar la página, seguirá saliendo el mensaje “Hola, Maria” 
*/
//crear cookies del nombre de usuario id=userlogin
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
//this should set the UserName cookie to the proper value;
function setUserNameCookie(userName) {
    createCookie("UserName", userName, 1);
}


/*
TODO Crear una funcion para mostrar y ocultar las contraseñas al clicar en el icono, tambien cambiar el icono al ocultar
*/

function showOcultPassword(num) {
    const input = document.querySelector('#passwd'+num);
    const button = document.querySelector('.passwd'+num);
    if (input.type === 'password') {
      input.type = 'text';
      button.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      input.type = 'password';
      button.innerHTML = '<i class="fas fa-eye"></i>';
    }
  }
    
function clickEye(num){
    const buttons = document.querySelectorAll('.passwd'+num);
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        showOcultPassword(num);
      });
    });
}

window.addEventListener("DOMContentLoaded", function () {
  clickEye(1);
  clickEye(2);
});


/*
TODO VOLVER A PONER
 */
