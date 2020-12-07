/* Vamos criar uma função e atribuí-la a uma variável!

Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte um for que conte de 0 até um número.
A função deverá retornar a quantidade de números impares que foram encontrados até chegar ao número. */

function naoPareDeContarImparesAte(numero)
 {
  
  var impares = 0;

  for (let i = 0; i < numero; i++)
  {
    if ((i % 2) !== 0) 
    {
      impares++;
    }
  }

  return impares;
}