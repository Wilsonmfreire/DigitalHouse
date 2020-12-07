// return masked string
function maskify(cc) {
    let mascara = [];

    for(let i=0; i<cc.length; i++){
      mascara.push( cc[i]);
    }
     for(let i=0; i<=mascara.length-5; i++){
      mascara[i]="#";
    } 
     return mascara;
   }
   console.log(maskify('4556364607935616'));