/*
Córdoba Pablo
Ejercicio jsEntradaSalida-05.js

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
function mostrar()
{	
	let nombre;
    let edad;
    
    nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
    
    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
    
    alert(`Usted se llama ${nombre} y tiene ${edad} años.`);
}
*/



/*
bis :
se debe obtener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/

function mostrar()
{	
	let nombre;
    let edad;
    let apellido;
    
    nombre = document.getElementById("txtIdNombre").value;
    apellido = prompt("Ingrese su apellido");
    edad = document.getElementById("txtIdEdad").value;
    
    alert(apellido ", Usted se llama " + nombre + " y tiene " + edad + " años.");
    
}




