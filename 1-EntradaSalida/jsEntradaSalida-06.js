/*
Córdoba Pablo
Ejercicio jsEntradaSalida-06.js

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() {
    
    
    let numero1, numero2;
    let resultado;
    
    numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
    
    
    resultado = numero1 + numero2;
    
    alert("La suma es " + resultado);
    

}
