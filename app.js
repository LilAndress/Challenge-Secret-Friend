let amigos = [];


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitar espacios extra

    if (nombre === "") {
        alert("⚠️ Ingrese un nombre válido");
        return;
    }

    amigos.push(nombre);
    
    input.value = "";

    mostrarAmigos();
}


function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

   
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert(" No hay amigos en la lista para sortear");
        return;
    }

  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

   
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}