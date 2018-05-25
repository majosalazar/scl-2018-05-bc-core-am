/* Acá va tu código correspondiente al DOM*/
window.onload = () => {
    const bEncode = document.getElementById("encode");
    const bDecode = document.getElementById("decode");
    const bDisplacement = document.getElementById("displacement");

    //boton encode esta conectado
    bEncode.addEventListener("click", function() {
        alert("funciono!");
    });

    //botón decode esta conectado 
    bDecode.addEventListener("click", function() {
        alert("yo tambien funciono!");
    });

    //boton de desplacamiento 
    bDisplacement.addEventListener("input", function() {
        alert("tengo tu número");
    })










}







