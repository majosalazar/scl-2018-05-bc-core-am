/* Acá va tu código correspondiente al DOM*/
window.onload = () => {
    /*
    const newText = document.getElementById("textIn").value;
    const displacement = document.getElementById("numberDis").value;
    const bEncode = document.getElementById("encode");
    const bDecode = document.getElementById("decode");
    
    //boton encode esta conectado, con funcion fecha vacia () =>
    bEncode.addEventListener("click", () => {
        console.log(newText);
    });

    //botón decode esta conectado 
    bDecode.addEventListener("click", () => {
        console.log(displacement);      
    });
    */

    //version 2
    //el boton reacciona al click y toma los valores de los const del area de texto y clave
    //boton cifrar
    const encode = document.getElementById("btnEncode").addEventListener("click", () => {
        const string = document.getElementById("textIn").value
        const offset = document.getElementById("numberDis").value;
        document.getElementById("resultText").innerHTML = "aqui va el texto cifrado: " + "yo soy la clave: " + displacement + " y yo el texto: " + newText;
    })
    //boton decifrar
    const decode = document.getElementById("btnDecode").addEventListener("click", () => {
        const string = document.getElementById("textIn").value;
        const offset = document.getElementById("numberDis").value;
        document.getElementById("resultText").innerHTML = "aqui va el texto decifrado: " + "yo soy la clave: " + displacement + " y yo el texto: " + newText;
    })
    
    
     



}







