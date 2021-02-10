function mostrar() { 
    
    /*Córdoba Pablo
    jsInstruccionIF-10 */
    
    //Defino constantes para el máximo y el mínimo que voy a utilizar
    const maximo = 10;
    const minimo = 1;
    
    //Genero el número RANDOM entre 1 y 10
    let nota;
    nota = Math.random() * (maximo - minimo) + minimo;
    nota = Math.round(nota);
    
        
    let mensaje;
    
    let excelente;
    excelente = "EXCELENTE, se sacó un "; 
    
    let aprobado;
    aprobado = "APROBÓ, se sacó un ";
    
    let desaprobado;
    desaprobado = "Vamos, la próxima se puede, se sacó un ";
    
    

    if (nota > 8) {
        
    mensaje = excelente + nota;
    } 
    
        else if (nota > 3) {
            
        mensaje = aprobado + nota;   
        } 
    
            else {
                
            mensaje =  desaprobado + nota;   
            }

    alert(mensaje);


} //FIN DE LA FUNCIÓN
