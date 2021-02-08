/*1.

Ejercicio: 01-jsFerreteFacturación.js

Alumno: Córdoba Pablo

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() 
{
    let precioUno;
    let precioDos;
    let precioTres;

    let sumaDePrecios;

    let respuesta;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    respuesta = "La suma es $" + sumaDePrecios;

    alert(respuesta);

}

function Promedio() 
{
    let precioUno;
    let precioDos;
    let precioTres;

    let sumaDePrecios;
    let promedioDePrecios;

    let respuesta;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    promedioDePrecios = sumaDePrecios / 3;

    respuesta = "El promedio es $" + promedioDePrecios;

    alert(respuesta);

}

function PrecioFinal() 
{
    let precioUno;
    let precioDos;
    let precioTres;

    let sumaDePrecios;
    let iva;
    let precioFinal;

    let respuesta;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseFloat(precioUno);
    precioDos = parseFloat(precioDos);
    precioTres = parseFloat(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    iva = sumaDePrecios * 0.21;
    precioFinal = sumaDePrecios + iva;

    respuesta = "El precio final es $" + precioFinal;

    alert(respuesta);
}
