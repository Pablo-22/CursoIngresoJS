/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
    let numero2;
    
    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2= parseInt(document.getElementById("txtIdNumeroDos").value);
    
    let suma = numero1 + numero2;
    
    alert(suma);
    
}

function restar()
{
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    
    let resta = numero1 - numero2;
    
    alert(resta);
}

function multiplicar()
{ 
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    
    let multiplicacion = numero1 * numero2;
    alert(multiplicacion);
}

function dividir()
{
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    
    let division = numero1 / numero2;

    alert(division);
}

