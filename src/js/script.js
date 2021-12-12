/* 
 TODO Crear Cookies del nombre de usuario
    El nombre de usuario se guarda en una Cookie. Así al refrescar la página, seguirá saliendo el mensaje “Hola, Maria” 
*/
//crear cookies del nombre de usuario id=userlogin
  var today = new Date();
  var expiry = new Date(today.getTime() + 7 * 24 * 3600 * 1000);
  
  function setCookie(name, value) {
      document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
  }
  //this should set the UserName cookie to the proper value;
  function storeValues(username) {
      setCookie("username", username);;
  
  }
    storeValues(resultUsername.username);
  
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
