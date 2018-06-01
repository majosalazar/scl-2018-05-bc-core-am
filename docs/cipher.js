window.cipher = {
//metodo de un objeto, recorre cada letra 
  encode: (newText, displacement) => {
    //aqui guardara el texto
    let resultEncode = "";
    //recorre el texto
    for (let i = 0; i < newText.length; i++) {
      //nueva variable texto en mayuscula
      let textM = newText.toUpperCase();
      //convierte la letra a numero ascii y lo guarda
      let codeAscii = textM.charCodeAt(i);
      //si aparece un 32 lo reemplace por un espacio y que lo guarde
      if (codeAscii === 32) {
        resultEncode += " ";
      }else {
        //ejecuta la operacion matematica de desplazamiento y la guarda
        let textDis = ((codeAscii - 65 + parseInt(displacement)) % 26) + 65;
        //guarda el resultado de cada una y la vuelve a convertir en letra
        resultEncode += String.fromCharCode(textDis);     
      }
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
      //si aparece un 32 lo reemplace por un espacio y que lo guarde
      if (codeAscii === 32) {
        resultDecode += " ";
      }else {
        //ejecuta la operacion matematica de desplazamiento para decifrar, agregue un parentesis al parseInt(displacement) asi logra ejecutar correctamente el decifrado.
        let textDis = ((codeAscii - 90 - (parseInt(displacement))) % 26) + 90;
        //guarda el resultado de cada una y la vuelve a convertir en letra
        resultDecode += String.fromCharCode(textDis);     
      }  
    }
    return resultDecode;
  }
}