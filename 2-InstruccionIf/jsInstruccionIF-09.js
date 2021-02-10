function mostrar()
{
	let numeroAleatorio;
    const maximo = 10;
    const minimo = 1;
    
    numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    numeroAleatorio = Math.round( numeroAleatorio );
    
    alert(numeroAleatorio);

}//FIN DE LA FUNCIÓN