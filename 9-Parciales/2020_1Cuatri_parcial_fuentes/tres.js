/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

El nombre de la persona con mas temperatura.

Cuantos mayores de edad estan viudos

La cantidad de hombres que hay solteros  o viudos.

cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
    //DECLARACIÓN
	let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let estadoCivil;
    let temperaturaCorporalIngresada;
    
    let mayorTemperaturaCorporalIngresada;
    let nombreDeLaPersonaConMasTemperaturaCorporal;
    
    let cantidadDeMayoresDeEdadViudos;
    
    let cantidadDeHombresSolterosOViudos;
    
    let cantidadDeAncianosConTemperaturaMayorA38;
    
    let cantidadDeHombresSolteros;
    let edadTotalDeHombresSolteros;
    let promedioDeEdadEntreHombresSolteros;
    
    let respuesta;
    
    //INICIALIZACIÓN
    nombreIngresado = "";
    edadIngresada = 0;
    sexoIngresado = "";
    temperaturaCorporalIngresada = "";
    estadoCivil = "";
    
    mayorTemperaturaCorporalIngresada;
    nombreDeLaPersonaConMasTemperaturaCorporal = "";
    
    cantidadDeMayoresDeEdadViudos = 0;
    
    cantidadDeHombresSolterosOViudos = 0;
    
    cantidadDeAncianosConTemperaturaMayorA38 = 0;
    
    cantidadDeHombresSolteros = 0;
    edadTotalDeHombresSolteros = 0;
    
    do
    {
        
        //VALIDACIONES:
        nombreIngresado = prompt("Ingrese Nombre");
        while (isNaN(nombreIngresado) == false)
        {
            nombreIngresado = prompt("Error, ingrese nombre");
        }
        
        edadIngresada = prompt("Ingrese edad");
        edadIngresada = parseInt(edadIngresada);
        while (isNaN(edadIngresada) == true)
        {
            edadIngresada = prompt("Error, ingrese edad");
        }
        
        sexoIngresado = prompt("Ingrese sexo (femenino/masculino)");
        while (isNaN(sexoIngresado) == false || sexoIngresado != "femenino" && sexoIngresado != "masculino")
        {
            sexoIngresado = prompt("Error, ingrese sexo");
        }
        
        estadoCivil = prompt("Ingrese estado civil (soltero/casado/viudo)");
        while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
        {
            estadoCivil = prompt("Error, ingrese estado civil");
        }
        
        temperaturaCorporalIngresada = prompt("Ingrese temperatura corporal");
        parseInt(temperaturaCorporalIngresada);
        while (isNaN(temperaturaCorporalIngresada) == true)
        {
            temperaturaCorporalIngresada = prompt("Error, ingrese temperatura corporal");
        }
        
        //LÓGICA
        if (temperaturaCorporalIngresada > mayorTemperaturaCorporalIngresada || mayorTemperaturaCorporalIngresada == undefined)
        {
            mayorTemperaturaCorporalIngresada = temperaturaCorporalIngresada;
            nombreDeLaPersonaConMasTemperaturaCorporal = nombreIngresado;
        }
        
        if (edadIngresada > 18 && estadoCivil == "viudo")
        {
            cantidadDeMayoresDeEdadViudos++;
        }
        
        if (edadIngresada > 18 && sexoIngresado == "masculino")
        {
            if(estadoCivil == "viudo" || estadoCivil == "soltero")
            {
            cantidadDeHombresSolterosOViudos++; 
            }
        }
        
        if (edadIngresada > 60 && temperaturaCorporalIngresada > 38)
        {
            cantidadDeAncianosConTemperaturaMayorA38++;
        }
                
        if (edadIngresada > 18 && sexoIngresado == "masculino" && estadoCivil == "soltero")
        {
            cantidadDeHombresSolteros++;
            edadTotalDeHombresSolteros += edadIngresada;
        }
        
        respuesta = prompt("¿Desea ingresar otra persona? (si/no)")
        
    }while(respuesta != "no");
    
    
    if (cantidadDeHombresSolteros > 0)
    {        
        promedioDeEdadEntreHombresSolteros = edadTotalDeHombresSolteros / cantidadDeHombresSolteros;
    } 
    
    console.log("cantidad de hombres solteros: " + cantidadDeHombresSolteros);
    console.log("edad total de hombres solteros: " + edadTotalDeHombresSolteros);
    console.log("edad total de hombres solteros: " + promedioDeEdadEntreHombresSolteros);
        
    document.write("Nombre de la persona con más temperatura: " + nombreDeLaPersonaConMasTemperaturaCorporal + "<br/>");
    document.write("Cantidad de mayores de edad viudos: " + cantidadDeMayoresDeEdadViudos + "<br/>");
    document.write("Cantidad de hombres solteros o viudos: " + cantidadDeHombresSolterosOViudos + "<br/>");
    document.write("Cantidad de personas de la tercera edad con más de 38 de temperatura: " + cantidadDeAncianosConTemperaturaMayorA38 + "<br/>");
    document.write("Promedio de edad entre hombres solteros: " + promedioDeEdadEntreHombresSolteros + "<br/>");   
} //FIN DE LA FUNCIÓN
