/*

Córdoba Pablo

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
    
    do{
	sexoIngresado = prompt("ingrese f (femenino) ó m (masculino).");
    
    }while (  !(sexoIngresado == "f" || sexoIngresado == "m")  );

    document.getElementById("txtIdSexo").value = sexoIngresado;

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN