/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
    let respuesta;
    
    let positivos = 0;
	let negativos = 0;
    
    let cantidadDePositivos = 0;
    let cantidadDeNegativos = 0;
    
    let cantidadDeCeros = 0;
    
    let cantidadDeNumerosPares = 0;
    
    let promedioDePositivos = 0;
    let promedioDeNegativos = 0;
    
    
    respuesta = prompt("Ingrese un número");
    
    while (respuesta != null) {
        
        respuesta = parseInt(respuesta);
        
        if (respuesta == 0)
        {
            cantidadDeCeros++;
            cantidadDeNumerosPares++;            
        }
        else 
        {
            if (respuesta > 0)
            {
                positivos += respuesta;
                cantidadDePositivos++;  
            }
            else
            {
                if (respuesta < 0)
                {
                    negativos += respuesta;
                    cantidadDeNegativos;
                }
            }
            
            if ((respuesta % 2) == 0)
            {
                cantidadDeNumerosPares++;
            }
        }
        
        respuesta = prompt("Si lo desea, ingrese otro número. Si no, haga click en cancelar");
    }
    
    if (cantidadDePositivos > 0)
    {
        promedioDePositivos = positivos/cantidadDePositivos; 
    }
    
    if (cantidadDeNegativos > 0)
    {
        promedioDeNegativos = negativos/cantidadDeNegativos;
    }
    
    document.write("Suma de los positivos: " + positivos + "<br/>");
    document.write("Suma de los negativos: " + negativos + "<br/>");
    
    document.write("Cantidad de positivos: " + cantidadDePositivos + "<br/>");
    document.write("Cantidad de negativos: " + cantidadDeNegativos + "<br/>");
    
    document.write("Cantidad de ceros: " + cantidadDeCeros + "<br/>");
    
    document.write("Cantidad de números pares: " + cantidadDeNumerosPares + "<br/>");
    
    document.write("Promedio de números positivos: " + promedioDePositivos + "<br/>" );
    document.write("Promedio de números negativos: " + promedioDeNegativos + "<br/>" );
    
    document.write("Diferencia entre positivos y negativos: " + (positivos - negativos)) + "<br/>";
    
}//FIN DE LA FUNCIÓN