/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> 
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo con mas cantidad de bolsas.		
				<br>f)
				El tipo mas caro
			</h2>
*/

function mostrar()
{
    let tipoIngresado;
    let cantidadDeBolsasIngresadas;
    let precioPorBolsa;
    
    let totalDeBolsas;
    let descuentoSobreElTotal;
    
    let precioBruto;
    let precioFinal;
    
    let cantidadDeBolsasDeArena;    
    let cantidadDeBolsasDeCal;
    let cantidadDeBolsasDeCemento;
    
    let mayorPrecioDeArena;
    let mayorPrecioDeCal;
    let mayorPrecioDeCemento;
    
    let tipoConMasCantidadDeBolsas;
    let tipoMasCaro;
    
    let respuesta;
    
    tipoIngresado = "";
    cantidadDeBolsasIngresadas = 0;
    precioPorBolsa = 0;
    
    totalDeBolsas = 0;
    descuentoSobreElTotal = 0;
    
    precioBruto = 0;
    precioFinal = 0;
    
    cantidadDeBolsasDeArena = 0;
    cantidadDeBolsasDeCal = 0;
    cantidadDeBolsasDeCemento = 0;
    
    mayorPrecioDeArena = 0;
    mayorPrecioDeCal = 0;
    mayorPrecioDeCemento = 0;
    
    tipoConMasCantidadDeBolsas = "";
    tipoMasCaro = "";
    
    do
    {   
        tipoIngresado = prompt("Ingrese tipo (cemento/cal/arena)");
        while (isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
        {
            tipoIngresado = prompt("Error, ingrese tipo (cemento/cal/arena)");
        }
    
        cantidadDeBolsasIngresadas = prompt("Ingrese cantidad");
        cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
        while (isNaN(cantidadDeBolsasIngresadas) == true)
        {
            cantidadDeBolsasIngresadas = prompt("Error, ingrese cantidad");
            cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);
        }
    
        precioPorBolsa = prompt("Ingrese precio");
        precioPorBolsa = parseInt(precioPorBolsa);
        while (isNaN(precioPorBolsa) == true || precioPorBolsa < 0)
        {
            precioPorBolsa = prompt("Error, ingrese precio");
            precioPorBolsa = parseInt(precioPorBolsa);
        }
        
        totalDeBolsas += cantidadDeBolsasIngresadas;
        
        switch (tipoIngresado)
        {
            case "arena":   
                if (precioPorBolsa < mayorPrecioDeArena || cantidadDeBolsasDeArena == 0)
                {
                    mayorPrecioDeArena = precioPorBolsa;  
                }
                cantidadDeBolsasDeArena += cantidadDeBolsasIngresadas;
                
            break;
                
            case "cal":
                if (precioPorBolsa < mayorPrecioDeCal || cantidadDeBolsasDeCal == 0)
                {
                    mayorPrecioDeCal = precioPorBolsa;  
                }
                cantidadDeBolsasDeCal += cantidadDeBolsasIngresadas;
                
            break;
                
            case "cemento":
                if (precioPorBolsa < mayorPrecioDeCemento || cantidadDeBolsasDeCemento == 0)
                {
                    mayorPrecioDeCemento = precioPorBolsa;  
                }
                cantidadDeBolsasDeCemento += cantidadDeBolsasIngresadas;
                
            break;
        }
        
        respuesta = prompt("¿Desea ingresar otro producto? (si/no)");
        
    }while(respuesta != "no");
    
    
    precioBruto = cantidadDeBolsasIngresadas * precioPorBolsa;
    if (totalDeBolsas > 30)
    {
        descuentoSobreElTotal = 25;
    }
    else 
    {
        if (totalDeBolsas > 10)
        {
            descuentoSobreElTotal = 15;
        }  
    }
    
    
    if(cantidadDeBolsasDeArena > cantidadDeBolsasDeCal && cantidadDeBolsasDeArena > cantidadDeBolsasDeArena)
    {
        tipoConMasCantidadDeBolsas = "Arena";
    }
    else
    {
        if(cantidadDeBolsasDeCal > cantidadDeBolsasDeCemento)
        {
            tipoConMasCantidadDeBolsas = "Cal";
        }
        else
        {
            tipoConMasCantidadDeBolsas = "Cemento";
        }  
    }
    
    
    if(mayorPrecioDeArena > mayorPrecioDeCal && mayorPrecioDeArena > mayorPrecioDeCemento)
    {
        tipoMasCaro = "Arena";
    }
    else
    {
        if(mayorPrecioDeCal > mayorPrecioDeCemento)
        {
            tipoMasCaro = "Cal";
        }
        else
        {
            tipoMasCaro = "Cemento";
        }  
    }
    
    
    precioFinal = precioBruto - precioBruto * descuentoSobreElTotal / 100;
    document.write("Precio bruto: " + precioBruto + "<br/>");
    
    if (descuentoSobreElTotal != 0)
    {
        document.write("Precio con descuento: " + precioFinal + "<br/>");
    }
    
    document.write("Tipo con más cantidad de bolsas: " + tipoConMasCantidadDeBolsas + "<br/>");
    document.write("Tipo más caro: " + tipoConMasCantidadDeBolsas + "<br/>");
    
    
}
