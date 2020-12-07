/* Agora vamos ver como podemos criar uma função que funcione como uma calculadora. 
Começaremos com algo simples...

Criaremos quatro funções que executarão as principais operações de uma calculadora: 
seu trabalho será definir as funções somar, subtrair, multiplicar e dividir. Cada uma delas 
receberá dois parâmetros e deve executar a operação matemática correspondente. Por exemplo, a
 função somar deve retornar a soma de ambos os parâmetros, a função subtrair a subtração de ambos 
 os parâmetros e assim por diante
Agora, com as funções já definidas, criaremos a função calculadora. Esta função receberá dois 
parâmetros numéricos e o nome de uma função, que será nosso callback. */

function somar (valor1,valor2)
{
    return valor1+valor2
}
function subtrair (valor1,valor2)
{
    return valor1-valor2
}
function multiplicar (valor1,valor2)
{
    return valor1*valor2
}
function dividir(valor1,valor2)
{
    return valor1 / valor2
}
function calculadora(numero1,numero2,callbak)
{
    return callbak(numero1,numero2)
}
console.log(calculadora(1,2,somar));