/* Exercício: Passando um Callback
Vamos criar três funções e ver como iniciar a trabalhar com os callbacks.

A primeira função se chamará dobro que receberá um número e retornará o dobro.

A segunda função se chamará triplo que recebera um número e retornará o triplo.

A terceira função será chamada de aplicar e receberá um valor e o nome de uma função como parâmetro.
Ela retornará o valor da aplicação da referida função ao valor recebido.

Exemplo:

aplicar(2, dobro); // 4
aplicar(4, triplo); // 12 */

function dobro (valor)
{
    return valor*2
}
function triplo (valor)
{
    return valor*3
}
function aplicar(numero, Callback)
{
    return Callback(numero);
}