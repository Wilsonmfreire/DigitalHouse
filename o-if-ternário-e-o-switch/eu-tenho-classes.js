/*O objetivo deste exercício é imprimir um texto na tela, que será condicionado da seguinte maneira.
Usando "switch" você deve avaliar se a variável "dia" é segunda, quarta ou sexta-feira e, nesse caso, 
você deve imprimir o texto " você tem aulas!"  .Para qualquer outro caso, você deve imprimir
"você não tem aulas". */

let dia = 0;

function fimDeSemana(dia)
{ //criação do switch
 switch(dia)
 {
    case "Segunda-feira":
         console.log("você tem aulas");
         break;
    case "Quarta-feira":
        console.log("você tem aualas");
        break;
    case "Sexta-feira":
        console.log("você tem aulas");
        break;
    default:
        console.log("você não tem aulas")
 }
}   
fimDeSemana("Segunda-feira")