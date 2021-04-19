if(getParameterByName("mensaje") != ""){    
    mensaje = getParameterByName("mensaje");
    base = getParameterByName("base");
    conversorTB(atob(mensaje),base);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function modificarEnlace(mensaje, base){
    document.getElementById("link").innerHTML = "Enviar mensaje";
    document.getElementById("link").href = "./index.html?mensaje=" + mensaje + "&base="+base;
  }  

function conversorTB(msg = null, base = null){
    ban = false;
    if(msg==null){
        msg = document.getElementById("msg").value;        
        base = document.getElementById("baseConvertir").value;
        ban = true;
    }
    console.log(msg)
    console.log(base)
    var mensajeConvertido = [];
    for (let i = 0; i < msg.length; i++) {
        const caracter = msg.charAt(i);
        const ascii = msg.charCodeAt(i);
        const caracterConvertido = ascii.toString(base);
        mensajeConvertido.push({
            caracter,
            ascii,
            caracterConvertido
        });
    }
    console.log(mensajeConvertido);

    var convertido = document.getElementById("convertido");
    var contenido = '';      
    for (let i = 0, j = 0; i < mensajeConvertido.length; i++, j++) {
        contenido += mensajeConvertido[i].caracterConvertido +' ';  
    }
    convertido.innerHTML = contenido;
}

function conversorBT(msg = null, base = null){
    ban = false;
    if(msg==null){
        msg = document.getElementById("msgBase").value.split(" ");        
        base = document.getElementById("baseOrigen").value;
        ban = true;
    }
    console.log(msg)
    var mensajeConvertido = "";
    for (let i = 0; i < msg.length; i++) {
        const ascii = parseInt(msg[i], base);        
        const caracterConvertido = String.fromCharCode(ascii);
        console.log(ascii+" - "+caracterConvertido)
        mensajeConvertido += caracterConvertido;
    }
    console.log(mensajeConvertido);

    var convertido = document.getElementById("convertido");
    convertido.innerHTML = mensajeConvertido;

    if(ban)
        modificarEnlace(btoa(msg),base)
}