/*
Córdoba Pablo
02-jsFerreteConstrucción.js

2.	Para el departamento de Construcción:


A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    //Definición de variables que serán necesarias para resolver el problema
    let ancho;
    let largo;
    
    let perimetro;
    const cantidadDeHilosDeAlambre = 3;
    let cantidadDeAlambreAComprar;
    
    let respuestaFinal;
    
    ancho = document.getElementById("txtIdLargo").value;
    ancho = parseFloat(ancho);
    
    largo = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    
    perimetro = ancho * 2 + largo * 2;
    
    
    cantidadDeAlambreAComprar = perimetro * cantidadDeHilosDeAlambre;
    
    respuestaFinal = "La cantidad de alambre necesaria será de " + cantidadDeAlambreAComprar + "m";
    
    alert(respuestaFinal); 
    
}


function Circulo () 
{
    let radio
    const cantidadDeHilosDeAlambre = 3;
    const pi = 3.14;
    let perimetroDelCirculo;
    let cantidadDeAlambreAComprar;
    let respuesta;
    
    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    
    perimetroDelCirculo = pi * radio ** 2;
    
    cantidadDeAlambreAComprar = perimetroDelCirculo * cantidadDeHilosDeAlambre;
    
    respuesta = "La cantidad de alambre necesaria será de " + cantidadDeAlambreAComprar + "m";
    
    alert(respuesta);
	
}



function Materiales () 
{
	
    //Definición de variables que serán necesarias para resolver el problema
    let ancho;
    let largo;
    
    let superficieDelTerreno;
    
    const BolsasDeCementoPorMetroCuadrado = 2;
    const BolsasDeCalPorMetroCuadrado = 3;
    
    let CantidadDeBolsasDeCalNecesarias;
    let CantidadDeBolsasDeCementoNecesarias;
    
    let respuestaFinal;
    
    
    ancho = document.getElementById("txtIdLargo").value;
    ancho = parseFloat(ancho);
    
    largo = document.getElementById("txtIdAncho").value;
    largo = parseFloat(largo);
    
    superficieDelTerreno = ancho * largo;
    
    CantidadDeBolsasDeCalNecesarias = superficieDelTerreno * BolsasDeCalPorMetroCuadrado;
    CantidadDeBolsasDeCementoNecesarias = superficieDelTerreno * BolsasDeCementoPorMetroCuadrado;
    
    respuestaFinal = "Se necesitarán " + CantidadDeBolsasDeCalNecesarias + " bolsas de cal y " + CantidadDeBolsasDeCementoNecesarias + " bolsas de cemento";
    
    alert(respuestaFinal);
    
}