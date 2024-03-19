const entrada = document.querySelector("#txt-entrada");
const salida = document.querySelector("#txt-salida");
const btnCifrar = document.querySelector(".cifrar");
const btnDecifrar = document.querySelector(".decifrar");
const btnCopiar = document.querySelector(".copiar");
const CuadritoSalida = document.querySelector(".salida");

function mostrarSalida(txtsalida) 
{
    if (txtsalida !== "") 
    {
        salida.classList.remove("hidden");
        CuadritoSalida.style.display = "none";
    } else 
    {
        salida.classList.add("hidden");
        CuadritoSalida.style.display = "flex";
    }

    salida.value = txtsalida;
}

function limpiarTexto(texto) 
{
    texto = texto.replace(/á|à/g, "a");
    texto = texto.replace(/é|è/g, "e");
    texto = texto.replace(/í|ì/g, "i");
    texto = texto.replace(/ó|ò/g, "o");
    texto = texto.replace(/ú|ù|ü/g, "u");
    return texto;
}

function cifrarTexto(texto) 
{
    let textoLimpio = limpiarTexto(texto);
    let textoCifrado = "";
    let letra = '';
    
    for (let i = 0; i < textoLimpio.length; i++) 
    {
        letra = textoLimpio[i];
        switch(letra) 
        {
            case 'a':
                textoCifrado += "ai";
            break;
            case 'e':
                textoCifrado += "enter";
            break;
            case 'i':
                textoCifrado += "imes";
            break;
            case 'o':
                textoCifrado += "ober";
            break;
            case 'u':
                textoCifrado += "ufat";
            break;
            default:
                textoCifrado += letra;
            break;
        }
    }
    
    mostrarSalida(textoCifrado);
}


function decifrarTexto(texto) 
{
    let textoDecifrado = limpiarTexto(texto).replace(/ufat/g, "u");
    textoDecifrado = textoDecifrado.replace(/ober/g, "o");
    textoDecifrado = textoDecifrado.replace(/imes/g, "i");
    textoDecifrado = textoDecifrado.replace(/enter/g, "e");
    textoDecifrado = textoDecifrado.replace(/ai/g, "a");
    mostrarSalida(textoDecifrado);
}

function copiarTexto(texto) 
{
    if (texto !== "") {
        salida.select();
        salida.setSelectionRange(0, 999);
        navigator.clipboard.writeText(texto);
        btnCopiar.innerHTML = "¡Texto copiado!";
        setTimeout(function() {
            btnCopiar.innerHTML = "Copiar";
        }, 1000);
    }
}

btnCifrar.addEventListener("click", () => 
{
    cifrarTexto(entrada.value);
});

btnDecifrar.addEventListener("click", () => 
{
    decifrarTexto(entrada.value);
});

btnCopiar.addEventListener("click", function() 
{
    copiarTexto(salida.value);
});
