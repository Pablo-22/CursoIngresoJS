function mostrar()
{
	//Córdoba Pablo
    
    //jsInstruccionSwitch-03
    
    
    //tomo el mes
	let mes;
    mes = document.getElementById("txtIdMes").value;
    let mensaje;
    
    
    switch(mes){
            
        case "Febrero":
         mensaje = "Este mes no tiene más de 29 días.";
        break;
            
        default:
         mensaje = "Este mes tiene 30 o más días";
      
    }
    
    alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN