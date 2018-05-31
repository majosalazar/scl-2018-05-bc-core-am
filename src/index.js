/* Acá va tu código correspondiente al DOM*/
window.onload = () => {
    //declarando const, si las declaro antes no me funciona :C
    /*
    const newText = document.getElementById("textIn").value.toUpperCase();
    const displacement = document.getElementById("numberDis").value;
    const bEncode = document.getElementById("encode");
    const bDecode = document.getElementById("decode");
    */


    //el boton reacciona al click y toma los valores de los const del area de texto y clave
    //boton cifrar
    const OnEncode = document.getElementById("btnEncode").addEventListener("click", () => {
        //area de texto + mayusculas
        const newText = document.getElementById("textIn").value.toUpperCase();
        // numero de desplazamientos
        const displacement = document.getElementById("numberDis").value;
        //conectar con el cipher js, trae el resultad
        let textEncode = window.cipher.encode(newText, displacement);     
        //imprime el texto cifrado
        document.getElementById("resultText").innerHTML = "hola " + textEncode;
    })
    //boton decifrar
    const OnDecode = document.getElementById("btnDecode").addEventListener("click", () => {
        //area de texto + mayusculas
        const newText = document.getElementById("textIn").value.toUpperCase();
        //numero de desplazamientos
        const displacement = document.getElementById("numberDis").value;
        //imprime el texto decifrado
        document.getElementById("resultText").innerHTML = "aqui va el texto decifrado: " + "yo soy la clave: " + displacement + " y yo el texto: " + newText;
    })
    
    
     



}







