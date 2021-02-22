/*

Córdoba Pablo
jsIteracionesWhile-08.js

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

    let respuesta = 0;
    let positivos = 0;
    let negativos = 1;
    
    //Creo una variable para verificar que se haya ingresado por lo menos un número negativo.
    let seIngresaronNegativos = false;
    
    respuesta = prompt("ingrese un número");
    
    while (respuesta != null)
    {
        respuesta = parseInt(respuesta);
        
        if (respuesta < 0)
        {
            //Compruebo que se ya se ha añadido por lo menos un número negativo
            seIngresaronNegativos = true;
            
            negativos *= respuesta;
        }
        else
        {
            positivos += respuesta;
        }
        
        respuesta = prompt("Si lo desea, ingrese otro número, si no, presione Cancelar"); 
    }
    
    document.getElementById("txtIdSuma").value = positivos;
    
    if(seIngresaronNegativos == false)
    {
        //Si no se añadió ningún número negativo, el producto de los negativos será 0
       document.getElementById("txtIdProducto").value = 0; 
    }
    else
    {
        document.getElementById("txtIdProducto").value = negativos;
    }

}//FIN DE LA FUNCIÓN