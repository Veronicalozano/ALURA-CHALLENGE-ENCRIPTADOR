function encriptar() {
    var texto = document.querySelector("#texto-1").value;
    var textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.querySelector("#texto2").value = textoCifrado;
}

var boton1 = document.querySelector("#encriptar");
boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#texto2").value;
    var textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.querySelector("#texto-1").value = textoCifrado;
}

var boton2 = document.querySelector("#desencriptar");
boton2.onclick = desencriptar;

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
