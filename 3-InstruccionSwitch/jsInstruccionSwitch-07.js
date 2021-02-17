function mostrar()
{
	let destinoIngresado;
    destinoIngresado = document.getElementById("txtIdDestino").value;
    
    let puntoCardinal;
    
    
    switch (destinoIngresado) {
        case "Bariloche":
            puntoCardinal = "Oeste";
        break;
            
        case "Cataratas":
            puntoCardinal = "Este";
        break;
            
        case "Mar del plata":
            puntoCardinal = "Este";
        break;
            
        case "Ushuaia":
            puntoCardinal = "Sur";
        break;
    }
            
    alert("Este destino se encuentra al " + puntoCardinal + " de Argentina.");

}//FIN DE LA FUNCIÓN