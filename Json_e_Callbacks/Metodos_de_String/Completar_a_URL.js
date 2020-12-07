/*Criar uma função chamada dominio que receberá uma String  "br.digitalhouse.com" e
 sua função será devolver "http://br.digitalhouse.com". */

 function dominio(url)
{
  let urlFormatada ="http://"+url;
  return urlFormatada;
}
console.log(dominio("br.digitalhouse.com"));
