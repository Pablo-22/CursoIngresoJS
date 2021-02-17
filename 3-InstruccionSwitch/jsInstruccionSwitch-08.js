function mostrar()
{
	let destinoIngresado;
    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    let clima;
    
    
    switch (destinoIngresado) {
        case "Bariloche":
            clima = "frío";
        break;
            
        case "Cataratas":
            clima = "calor";
        break;
            
        case "Mar del plata":
            clima = "calor";
        break;
            
        case "Ushuaia":
            clima = "frío";
        break;
    }
            
    alert("En este destino hace " + clima + ".");

}//FIN DE LA FUNCIÓN