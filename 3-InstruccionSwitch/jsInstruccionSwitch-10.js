function mostrar()
{
	let estacionIngresada;
    estacionIngresada = document.getElementById("txtIdEstacion").value;
    
    let destinoIngresado;
    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    let disponibilidad;
    
    
    switch (estacionIngresada){
        case "Invierno":
            switch (destinoIngresado){
                case "Bariloche":
                    disponibilidad = "Se viaja";
                break;
                 
                default:
                    disponibilidad = "No se viaja";
            }
            
            
        break;
         
            
        case "Verano":
            switch (destinoIngresado){
                case "Cataratas":
                case "Mar del plata":
                    disponibilidad = "Se viaja";
                break;
                    
                 
                default:
                    disponibilidad = "No se viaja";
            }
        break;
            
            
        case "Otoño":
            disponibilidad = "Se viaja";
        break;
            
        case "Primavera":
            switch (destinoIngresado){
                case "Bariloche":
                    disponibilidad = "No se viaja";
                break;
                    
                
                default:
                    disponibilidad = "Se viaja";
                
            }
        break;
        
    }
    

    alert(disponibilidad + " a ese lugar en la estación seleccionada.");
	

}//FIN DE LA FUNCIÓN