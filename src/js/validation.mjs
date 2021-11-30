/* 
 TODO mensajes del login incorrecto
    Saldrá un mensaje de error en el formulario (los errores tendrán el color de error de la Paleta de Colores) 
 */


//La validacion de los campos a de ser con expresiones regulares siempre que sea posible
/*
 TODO mensajes del login correcto
    redireccionamos a front page y se muestra un mensaje como “Hola, Maria” (por ejemplo, si la usuaria es Maria) 
*/


/* 
TODO validar el name 
    - no puede estar vacío
    - numero de caracteres entre 3 y 20
*/


/* 
TODO validar el email 
    - valida al salir del campo (al perder el foco) 
    - no puede estar vacío
    - no debe existir en la Tabla de Usuarios
    - Patron de validacion:
        - nombre: solo la primera letra en mayúscula y el resto en minúscula
        - nombre de la organización: entre 5 y 10 minusculas
        - tipo: Solo pudeden ser com, net o gov
        - Solo puede haber una @ y un punto
*/


/* 
TODO validar el password
    - valida al salir del campo (al perder el foco) 
    - Muestra mensajes debajo de los campos para los errores que puedan suceder.
    - Patron de validacion:
        - Longitud mínima de siete caracteres
        - Incluir letras mayúsculas y minúsculas
        - Incluir números
        - Incluir caracteres especiales: ñ, $, % ë (esta parte es opcional, pero es una mejora)
*/