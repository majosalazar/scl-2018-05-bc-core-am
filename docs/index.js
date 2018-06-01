window.onload = () => {
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
        document.getElementById("resultText").innerHTML = textEncode;
    })
    //boton decifrar
    const OnDecode = document.getElementById("btnDecode").addEventListener("click", () => {
        //area de texto + mayusculas
        const newText = document.getElementById("textIn").value.toUpperCase();
        //numero de desplazamientos
        const displacement = document.getElementById("numberDis").value;
        //conectar con el cipher js, trae el resultad
        let textDecode = window.cipher.decode(newText, displacement);     
        //imprime el texto decifrado
        document.getElementById("resultText").innerHTML = textDecode;
    })
    //boton para recargar pagina
    const reloadPage = document.getElementById("btnReload").addEventListener("click", () => {
        location.reload();

    })
}







