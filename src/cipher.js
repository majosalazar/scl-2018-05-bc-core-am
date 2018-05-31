//es un objeto
window.cipher = {

//es un metodo de un objeto, recorre cada letra 
  encode: (newText, displacement) => {
    //aqui guardara el texto
    let resultEncode = "";
    //recorre el texto
    for (let i = 0; i < newText.length; i++) {
      //convierte la letra a numero ascii y la guarda
      let codeAscii = newText.charCodeAt(i);
      //ejecuta la operacion matematica de desplazamiento
      let textDis = ((codeAscii - 65 + parseInt(displacement)) % 26) + 65;
      //guarda el resultado de cada una y la vuelve a convertir en letra
      resultEncode += String.fromCharCode(textDis);     
    }
    return resultEncode;

  },
  decode: (newText, displacement) => {
    /* Acá va tu código */
  }
}