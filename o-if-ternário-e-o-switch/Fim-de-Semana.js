/*O objetivo deste exercício é imprimir no console um texto que varia de acordo com o dia que contém na 
variável dia. Para isso, já apresentamos um código feito com if / else que você precisará modificá-lo
para testar as diferentes mensagem. */

let dia = "Segunda-feira";

function fimDeSemana(dia) {	
	if (dia == 'sexta-feira') {
    	console.log('Bom fim de semana!')
	} else if (dia == 'segunda-feira') {
    	console.log('Boa semana!')
	} else {
    	console.log('Bom dia!')
	}
}

switch (dia)
{
    case "Segunda-feira":
        console.log("Boa semana!");
        break;
    case "Sexta feira":
        console.log("Boa semana!");
        break;
    default:
        console.log("Desconheço esse dia");
}