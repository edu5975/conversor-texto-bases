//String.fromCharCode(valor)
//console.log(btoa("lacasaazul"));
//console.log(atob("bGFjYXNhYXp1bA=="));

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function modificarEnlace(mensaje){
    document.getElementById("link").innerHTML = "Enviar mensaje";
    document.getElementById("link").href = "./index.html?mensaje=" + mensaje;
  }  

function conversorAB(msg = null, base = 2){
    ban = false;
    if(msg==null){
        var msg = document.getElementById("msg").value;
        ban = true;
    }
    console.log(msg)
    var mensajeConvertido = [];
    for (let i = 0; i < msg.length; i++) {
        const caracter = msg.charAt(i);
        const ascii = msg.charCodeAt(i);
        const caracterConvertido = ascii.toString(base);
        console.log("Caracter: " + caracter + " - ascii: " + ascii + " - Caracter convertido "+ caracterConvertido)
        mensajeConvertido.push({
            caracter,
            ascii,
            caracterConvertido
        });
    }
    console.log(mensajeConvertido);

    var convertido = document.getElementById("convertido");
    var contenido = "";
    mensajeConvertido.forEach(item => {
        contenido += item.caracterConvertido + " ";
    });
    convertido.innerHTML = contenido;

    if(ban)
        modificarEnlace(btoa(msg))
}

if(getParameterByName("mensaje") != ""){    
    var convertido = document.getElementById("entradas").innerHTML="";
    val = getParameterByName("mensaje");
    conversorAB(atob(val));
}