/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
    let acumulador = 0;
    let contador = 0;
    let respuesta = 0;
    
    respuesta = prompt("Ingrese un número");
 
    while(respuesta != null)
    {
        respuesta = parseInt(respuesta);
        
        acumulador += respuesta;
        respuesta = prompt("Si lo desea, ingrese otro, si no, haga click en cancelar.");
        
        contador++;
        
    }
    
    document.getElementById("txtIdSuma").value = acumulador;
    document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN