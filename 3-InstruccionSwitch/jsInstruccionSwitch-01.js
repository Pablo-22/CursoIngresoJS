function mostrar()
{
    
	//tomo el mes
	let mes;
    mes = document.getElementById("txtIdMes").value;
    let mensaje;
    
    
    switch(mes){
            
        case "Enero":
         mensaje = "Que comiences bien el año!!!.";
        break;
            
        case "Marzo":
         mensaje = "A clases!!!.";
        break;
            
        case "Julio":
         mensaje = "Se vienen las vacaciones!!!.";
        break;
            
        case "diciembre":
         mensaje = "Felices fiestas!!!.";
        break;
        default:
         mensaje = "";
      
    }
    
    alert(mensaje);
    
    /*
    
    let mensaje
    
    if (mes == "Enero")
    {
        mensaje = "Que comiences bien el año!!!.";        
    }
    else
    {
        if (mes == "Marzo")
        {
            mensaje = "A clases!!!.";
        }
        else
        {
            if(mes == "Julio");
            {
                mensaje = "Se vienen las vacaciones!!!.";
            }
            else
            {
                if(mes == "Diciembre")
                    mensaje = "Felices fiestas!!!.";
            }
        }
    }
    
    alert(mensaje);
    
    */


}//FIN DE LA FUNCIÓN