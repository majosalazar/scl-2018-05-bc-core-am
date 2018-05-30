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
    const bDecode = document.getElementById("decode").addEventListener("click", () => {
        const newText = document.getElementById("textIn").value;
        const displacement = document.getElementById("numberDis").value;
        document.getElementById("resultText").innerHTML = "cacha lo que sucede" + newText + displacement;
    })

    const bEncode = document.getElementById("encode").addEventListener("click", () => {
        const newText = document.getElementById("textIn").value;
        const displacement = document.getElementById("numberDis").value;
        document.getElementById("resultText").innerHTML = "cacha lo que sucede" + newText + displacement;
    })
}







