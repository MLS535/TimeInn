/* 
 TODO Crear Cookies del nombre de usuario
    El nombre de usuario se guarda en una Cookie. Así al refrescar la página, seguirá saliendo el mensaje “Hola, Maria” 
*/

/*
<div class="password">
<label for="password">Contraseña</label><br />
<input id="passwd1" type="password" name="password" placeholder="Contraseña" />
<span class="passwd1"><i class="fas fa-eye"></i></span>
</div>
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


