/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
de cada una debo obtener los siguientes datos: <br>
el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
el precio (validar entre 100 y 300),<br>
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
la Marca y el fabricante. <br>
Se debe Informar al usuario lo siguiente:<br>

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
b) Del tipo con mas unidades, el promedio por compra <br>
c) Cuántas unidades de jabones hay en total <br><br>
*/

function mostrar()
{
    let tipoIngresado;
    let precioIngresado;
    
    let marcaIngresada;
    let fabricanteIngresado;
    
    let cantidadIngresada;
    
    let precioDeAlcoholMasBarato;
    let cantidadDeUnidadesDelAlcoholMasBarato;
    let fabricanteDelAlcoholMasBarato;
    //let banderaDelPrimerAlcohol = true;
    
    let mayorCantidadDeUnidades;
    
    let contadorDeAlcohol;
    let contadorDeJabon;
    let contadorDeBarbijo;
    
    let unidadesDeAlcohol;
    let unidadesDeJabon;
    let unidadesDeBarbijo;
    
    let promedioPorCompra;

	let contadorDeVueltas;
    
    contadorDeAlcohol = 0;
    contadorDeJabon = 0;
    contadorDeBarbijo = 0;
    
    unidadesDeAlcohol = 0;
    unidadesDeJabon = 0;
    unidadesDeBarbijo = 0;
    
    promedioPorCompra = 0;
    mayorCantidadDeUnidades = 0;
    
    contadorDeVueltas = 0;
    
    //while (contadorDeVueltas < 5)
    for(contadorDeVueltas = 0; contadorDeVueltas < 5; contadorDeVueltas++)
    {
        tipoIngresado = prompt("Ingrese tipo");
        while (isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabón" && tipoIngresado != "alcohol")
        {
            tipoIngresado = prompt("Error, ingrese tipo");
        }
        
        precioIngresado = prompt("Ingrese precio");
        precioIngresado = parseInt(precioIngresado);
        while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
        {
            precioIngresado = prompt("Error, ingrese precio");
            precioIngresado = parseInt(precioIngresado);
        }
        
        cantidadIngresada = prompt("Ingrese cantidad");
        cantidadIngresada = parseInt(cantidadIngresada);
        while (isNaN(cantidadIngresada) == true || cantidadIngresada < 0 || cantidadIngresada > 1000 || cantidadIngresada == 0)
        {
            cantidadIngresada = prompt("Error, ingrese cantidad");
            cantidadIngresada = parseInt(cantidadIngresada);
        }
        
        
        marcaIngresada = prompt("Ingrese marca");
        while (isNaN(marcaIngresada) == false)
        {
            marcaIngresada = prompt("Error, ingrese marca");
        }
        
    
        fabricanteIngresado = prompt("Ingrese fabricante");
        while (isNaN(fabricanteIngresado) == false)
        {
            fabricanteIngresado = prompt("Error, ingrese fabricante");
        }
        
        /*
        if (tipoIngresado == "alcohol" && precioIngresado < precioDeAlcoholMasBarato || banderaDelPrimerAlcohol == true )
        {
            precioDeAlcoholMasBarato = precioIngresado;
            fabricanteDelAlcoholMasBarato = fabricanteIngresado;
            cantidadDeUnidadesDelAlcoholMasBarato = cantidadIngresada;
            
            banderaDelPrimerAlcohol = false;
        }
        */
        
        // b) Del tipo con mas unidades, el promedio por compra <br>
        
        switch (tipoIngresado)
        {
            case "alcohol":
                if (precioIngresado < precioDeAlcoholMasBarato || contadorDeAlcohol == 0)
                {
                    precioDeAlcoholMasBarato = precioIngresado;
                    fabricanteDelAlcoholMasBarato = fabricanteIngresado;
                    cantidadDeUnidadesDelAlcoholMasBarato = cantidadIngresada;   
                }
                
                contadorDeAlcohol++;
                unidadesDeAlcohol += cantidadIngresada;
            break;
                
            case "jabón":
                contadorDeJabon++;
                unidadesDeJabon += cantidadIngresada;
            break;
                
            case "barbijo":
                contadorDeBarbijo++;
                unidadesDeBarbijo += cantidadIngresada;
            break;
        }
        
        contadorDeVueltas++;
    }
    
    // Punto a:
    document.write("Cantidad de unidades del alcohol más barato: " + cantidadDeUnidadesDelAlcoholMasBarato + "<br/>");
    document.write("Fabricante del alcohol más barato: " + fabricanteDelAlcoholMasBarato + "<br/>");
    
    // Punto b:
    if(unidadesDeAlcohol > unidadesDeBarbijo && unidadesDeAlcohol > unidadesDeJabon)
    {
        promedioPorCompra = unidadesDeAlcohol / contadorDeAlcohol;
    }
    else
    {
        if(unidadesDeBarbijo > unidadesDeJabon)
        {
            promedioPorCompra = unidadesDeBarbijo / contadorDeBarbijo;
        }
        else
        {
            promedioPorCompra = unidadesDeJabon / contadorDeJabon;
        }  
    }
    
    document.write("Promedio del tipo con más unidades: " + promedioPorCompra + "<br/>");
    
    // Punto c:
    document.write("Cantidad total de jabones: " + unidadesDeJabon + "<br/>");
    
}
