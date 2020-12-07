/* Exercício: Passando um Callback
Sua tarefa agora é criar duas funções.

A primeira função deverá se chamar adicionarHttp , a mesma, receberá por parâmetro uma URL que será 
concatenada com a String "http://" no começo da URL e em seguida retornará esse valor. A segunda 
função se chamará processar  e receberá uma lista de sites web e uma função. A função processar  
retornará um array contendo todos os resultados aplicando a função que foi passada. */

function adicionarHttp(url) {
    return String("http://"+url)
}
function processar(lista,callback){
    let resul = []
    for (let i=0; i <= lista.length-1; i++){
         resul.push(callback(lista[i]))
    }
    return resul
}