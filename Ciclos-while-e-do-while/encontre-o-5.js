/* Queremos construir uma função que receba um array de números como parâmetro. A função deve passar por esse array e imprimir cada um dos números pelo console. Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".
Para resolver este exercício, você DEVE usar o do-while.*/

function encontreUm5(numeros)
{
  let i = 0;
  do 
  {
      if(numeros [i] ==5)
      {
          console.log("Encontramos um 5!");
          break;
      } 
      else
      {
          i++;
      }
  }
  while (i<numeros.length)
}
encontreUm5([5,3,10,1]);