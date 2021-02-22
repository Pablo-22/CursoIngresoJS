/*
Córdoba Pablo
jsIteracionesWhile-06
*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador= 0;
	acumulador= 0;
	
    do {
        numeroIngresado = prompt("Ingrese un número");
        numeroIngresado = parseInt(numeroIngresado);
        
        acumulador += numeroIngresado;
        contador++;
        
    } while (contador < 5);
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN