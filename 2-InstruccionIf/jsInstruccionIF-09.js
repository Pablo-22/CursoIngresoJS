function mostrar()
{
	let numeroAleatorio;
    const maximo = 10;
    const minimo = 1;
    
    numeroAleatorio = Math.round(Math.random() * (maximo - minimo) + minimo );
    
    alert(numeroAleatorio);

}//FIN DE LA FUNCIÓN