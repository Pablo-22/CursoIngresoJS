/*
Córdoba Pablo

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
    
    do {
        numeroIngresado = prompt("Ingrese un número entre 0 y 9");
        parseInt(numeroIngresado);
    } while (!(numeroIngresado > 0 && numeroIngresado < 10));
    
    document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN