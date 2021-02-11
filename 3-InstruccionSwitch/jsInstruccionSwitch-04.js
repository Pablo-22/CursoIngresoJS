function mostrar()
{
	//Córdoba Pablo
    
    //jsInstruccionSwitch-04
    
    //tomo el mes
	let mes;
    mes = document.getElementById("txtIdMes").value;
    let cantidadDeDias;
    
    switch(mes){
            
        case "Febrero":
         cantidadDeDias = 28;
        break;
            
        case "Abril":
        case "Junio":   
        case "Septiembre":  
        case "Noviembre":
         cantidadDeDias = 30;
        break;
            
        default:
         cantidadDeDias = 31;
      
    }
    
    alert("Este mes tiene " + cantidadDeDias + " días");

}//FIN DE LA FUNCIÓN