function encriptar() {
    let texto = document.getElementById("input-text").value;

    // Validar que solo haya letras minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;

    // Validar que solo haya letras minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos.");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}
