/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo = parseInt(document.getElementById("txtIdImporte").value);
    let nuevosueldo = sueldo - (sueldo * 0.25);
        
	
    document.getElementById("txtIdResultado").value = nuevosueldo;
}
