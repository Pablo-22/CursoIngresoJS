/*
Córdoba Pablo
Ejercicio jsEntradaSalida-09.js

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
    let sueldo;
    let nuevosueldo;
    
    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo = parseInt(sueldo);
    
    nuevosueldo = sueldo + (sueldo * 0.1);
        
	
    document.getElementById("txtIdResultado").value = nuevosueldo;
    
    
}
