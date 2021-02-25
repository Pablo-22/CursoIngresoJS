/*

Córdoba Pablo
jsIteracionesWhile-09.js

Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	

    let respuesta = "";
    let maximo;
    let minimo;
    
    respuesta = prompt("Ingrese un número");
    
    maximo = respuesta;
    minimo = respuesta;
    
    while(respuesta != null)
    {
        respuesta = parseInt(respuesta);
        
        if(respuesta > maximo)
        {
            maximo = respuesta;
        }
        else
        {
            if(respuesta < minimo)
            {
                minimo = respuesta;
            }
        }
        
        respuesta = prompt("Si lo desea, ingrese otro número. Si no, haga click en cancelar.")
    }
    
    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
    
}//FIN DE LA FUNCIÓN