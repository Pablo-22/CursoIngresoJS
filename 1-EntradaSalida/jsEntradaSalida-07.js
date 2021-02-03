/*
Córdoba Pablo
Ejercicio jsEntradaSalida-07.js

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
    //Declaración de variables
    let numero1;
    let numero2;
    
    let suma;
    let respuesta;
    
    //Obtención de los números
    numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //Conversión a Int de los números obtenidos en forma de string
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    
    //Suma entre los números obtenidos
    suma = numero1 + numero2;
    
    //respuesta
    respuesta = "La suma es " + suma;
    alert(respuesta);
    
    
}

function restar()
{
    //Declaración de variables
    let numero1;
    let numero2;
    
    let resta;
    let respuesta;
    
    //Obtención de los números
	numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //Conversión a Int de los números obtenidos en forma de string
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    //Resta entre los números obtenidos
    resta = numero1 - numero2;
    
    //respuesta
    respuesta = "La resta es " + resta;
    alert(respuesta);
}


function multiplicar()
{ 
    //Declaración de variables
    let numero1;
    let numero2;
    
    let multiplicacion;
    let respuesta;
    
    //Obtención de los números
	numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //Conversión a Int de los números obtenidos en forma de string
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    //Multiplicación entre los números obtenidos
    multiplicacion = numero1 * numero2;
    
    //respuesta
    respuesta = "La muliplicación es " + multiplicacion;
    alert(respuesta);
}



function dividir()
{
    
    //Declaración de variables
    let numero1;
    let numero2;
    
    let division;
    let respuesta;
    
    //Obtención de los números
	numero1 = document.getElementById("txtIdNumeroUno").value;
    numero2 = document.getElementById("txtIdNumeroDos").value;
    
    //Conversión a Int de los números obtenidos en forma de string
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    //División entre los números obtenidos
    division = numero1 / numero2;
    
    //respuesta
    respuesta = "El división es " + division;
    alert(respuesta);
}

