function mostrar()
{
	let estacionIngresada;
    estacionIngresada = document.getElementById("txtIdEstacion").value;
    
    let destinoIngresado;
    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    let precioBase;
    precioBase = 15000;
    
    let aumento = 0;
    let descuento = 0;
    
    let precioFinal;
    
    
    switch (estacionIngresada){
        case "Invierno":
            switch (destinoIngresado){
                case "Bariloche":
                    aumento = 0.20;
                break;
                    
                 
                case "Mar del plata":
                    descuento = 0.20;
                break;
                    
                 
                default:
                    descuento = 0.10;
            }
            
            
        break;
         
            
        case "Verano":
            switch (destinoIngresado){
                case "Bariloche":
                    descuento = 0.20;
                break;
                    
                 
                case "Mar del plata":
                    aumento = 0.20;
                break;
                    
                 
                default:
                    aumento = 0.10;
            }
        break;
            
            
        default:
            aumento = 0.10;

        
    }
    
    precioFinal = precioBase + precioBase * aumento - precioBase * descuento;
    
    alert("El precio final de su viaje será de $" + precioFinal);
	

}//FIN DE LA FUNCIÓN