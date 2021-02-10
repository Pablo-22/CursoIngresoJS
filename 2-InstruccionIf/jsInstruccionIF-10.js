function mostrar() {

    let nota;
    const maximo = 10;
    const minimo = 1;


    //Genero el número RANDOM entre 1 y 10 
    nota = Math.round(Math.random() * (maximo - minimo) + minimo);

    alert("Examen: " + nota);

    if (nota >= 9) {
        alert("EXCELENTE");

    } else if (nota >= 4) {
        alert("APROBÓ");

    } else {
        alert("Vamos, la próxima se puede");
    }



} //FIN DE LA FUNCIÓN
