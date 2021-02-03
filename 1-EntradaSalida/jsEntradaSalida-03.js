/*
Córdoba Pablo
Ejercicio jsEntradaSalida-03.js

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
    // error nombreIngresado=document.getElementById('txtidNombre').value;
    //nombreIngresado=txtIdNombre.value;
    
    
	let nombre;
    
    nombre = document.getElementById("txtIdNombre").value;
    

    alert(nombre);
    
    document.getElementById("txtIdNombre").value = "";
}


