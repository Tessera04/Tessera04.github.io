function generarTextos(){
    var inputTexto = document.getElementById("mensaje").value
    var sinTextos = document.getElementById("SinTexto")
    var outputTexto = document.getElementById("conTexto")
    var texto1 = document.getElementById("principalText")
    var texto2 = document.getElementById("secondaryText")
    var botonCopiar = document.querySelector("botonCopiar")
    

    if(inputTexto == ''){
        outputTexto.style.display = "none"
        texto1.style.display = "block"
        texto2.style.display = "block"
        sinTextos.style.display = "block"
        botonCopiar = true;
    } else {
        outputTexto.style.display = "block"
        texto1.style.display = "none"
        texto2.style.display = "none"
        sinTextos.style.display = "none"
        botonCopiar = false;
    }
}

function encriptar(){
    var inputTexto = document.getElementById("mensaje").value
    var encriptar = inputTexto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, 'ai').replace(/o/g, "ober").replace(/u/g, "ufat")
    var outputTexto = document.getElementById("conTexto")
    outputTexto.value = encriptar
}

function desencriptar(){
    var inputTexto = document.getElementById("mensaje").value
    var desencriptar = inputTexto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    var outputTexto = document.getElementById("conTexto")
    outputTexto.value = desencriptar
}

function copiar(){
    var copiar = document.getElementById("conTexto").value
    navigator.clipboard.writeText(copiar)
    .then(() =>{
        alert("Texto copiado con exito!")
    })
    .catch(() =>{
        alert("Algo salio mal.")
    })
}