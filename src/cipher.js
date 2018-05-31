//es un objeto
window.cipher = {

//es un metodo de un objeto, recorre cada letra 
  encode: (newText, displacement) => {
    //aqui guardara el texto
    let resultEncode = "";
    //recorre el texto
    for (let i = 0; i < newText.length; i++) {
      //nueva variable texto en mayuscula
      let textM = newText.toUpperCase();
      //convierte la letra a numero ascii y la guarda
      let codeAscii = textM.charCodeAt(i);
      //ejecuta la operacion matematica de desplazamiento y la guarda
      let textDis = ((codeAscii - 65 + parseInt(displacement)) % 26) + 65;
      //guarda el resultado de cada una y la vuelve a convertir en letra
      resultEncode += String.fromCharCode(textDis);     
    }
    //devuelve el resultado
    return resultEncode;

  },
  decode: (newText, displacement) => {
    //aqui guardara el texto
    let resultDecode = "";
    //recorre el texto
    for (let i = 0; i < newText.length; i++) {
      //nueva variable texto en mayuscula
      let textM = newText.toUpperCase();
      //convierte la letra a numero ascii y la guarda
      let codeAscii = textM.charCodeAt(i);
      //ejecuta la operacion matematica de desplazamiento --- el ultimo numero debe cambiar 
      let textDis = ((codeAscii - 65 - parseInt(displacement)) % 26) + 65;
      //guarda el resultado de cada una y la vuelve a convertir en letra
      resultEncode += String.fromCharCode(textDis);     
    }
    return resultDecode;
  }
}