/*
Córdoba Pablo
Ejercicio jsEntradaSalida-10.js

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	let sueldo;
    let nuevosueldo;
    
    sueldo = document.getElementById("txtIdImporte").value;
    sueldo = parseInt(sueldo)
    
    nuevosueldo = sueldo - (sueldo * 0.25);
        
	
    document.getElementById("txtIdResultado").value = nuevosueldo;
}
