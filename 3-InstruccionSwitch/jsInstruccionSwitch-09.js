/*

Córdoba Pablo
jsInstrucciónSwitch-09

*/

function mostrar()
{
	let estacionIngresada;
    estacionIngresada = document.getElementById("txtIdEstacion").value;
    
    let destinoIngresado;
    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    let precioBase;
    precioBase = 15000;
    
    let modificacionDePrecio = 0;
    
    let precioFinal;
    
    
    switch (estacionIngresada){
        case "Invierno":
            switch (destinoIngresado){
                case "Bariloche":
                    modificacionDePrecio = 0.20;
                break;
                    
                 
                case "Mar del plata":
                    modificacionDePrecio = -0.20;
                break;
                    
                 
                default:
                    modificacionDePrecio = -0.10;
                break;
            }
            
            
        break;
         
            
        case "Verano":
            switch (destinoIngresado){
                case "Bariloche":
                    modificacionDePrecio = -0.20;
                break;
                    
                 
                case "Mar del plata":
                    modificacionDePrecio = 0.20;
                break;
                    
                 
                default:
                    modificacionDePrecio = 0.10;
                break;
            }
        break;
            
            
        default:
            modificacionDePrecio = 0.10;
        break;

        
    }
    
    precioFinal = precioBase + precioBase * modificacionDePrecio;
    
    alert("El precio final de su viaje será de $" + precioFinal);
	

}//FIN DE LA FUNCIÓN