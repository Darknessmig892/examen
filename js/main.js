function comprobarClave() {
    clave1 = document.f1.clave1.value
    clave2 = document.f1.clave2.value

    if (clave1 == "elmer" && clave2 == "examen"){
        alert("Los Datos Coinciden...\n Bienvenido Trabajador");
            var href = "./html/trabajadores.html";
            window.location=href;
        }

    else{ 
        alert("Error... \n contraseña incorrecta");
            var href = "https://youtu.be/dQw4w9WgXcQ";
            window.location=href;
    }
}