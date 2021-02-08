/*
Córdoba Pablo
03-jsFerretePinturas.js

3.	Para el departamento de Pinturas:

A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").

B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/


function FahrenheitCentigrados () 
{

    let farenheit;
    let centigrados;
    
    let respuesta;
        
    farenheit = document.getElementById("txtIdTemperatura").value;
    farenheit = parseFloat(farenheit);
    
    centigrados = (farenheit - 32) * (5/9);
    
    respuesta = farenheit + " Farenheit son " + centigrados + " centígrados";
    
    alert(respuesta);
    
    
}

function CentigradosFahrenheit () 
{
    let centigrados;
    let farenheit;
    
    let respuesta;
        
    centigrados = document.getElementById("txtIdTemperatura").value;
    centigrados = parseFloat(centigrados);
    
    farenheit = centigrados * (5/9) + 32;
    
    respuesta = centigrados + " Centígrados son " + farenheit + " farenheit";
    
    alert(respuesta);
}
