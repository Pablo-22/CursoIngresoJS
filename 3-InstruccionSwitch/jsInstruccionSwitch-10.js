/*

Córdoba Pablo
jsInstrucciónSwitch-10

una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar.

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".

en Verano: Se viaja a Mar del plata y Cataratas solamente.

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche.

*/

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
                break;
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
                break;
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
                break;
                
            }
        break;
        
    }
    

    alert(disponibilidad);
	

}//FIN DE LA FUNCIÓN