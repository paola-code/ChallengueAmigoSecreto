let listaAmigos = [];


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim()
    if (nombreAmigo == ""){
        alert("Debe ingresar un nombre")
    } else if (listaAmigos.includes(nombreAmigo)) {
        alert("El nombre ya existe en la lista")
    } else {
        listaAmigos.push(nombreAmigo)
        document.getElementById('amigo').value = ""
        mostrarAmigos()
    }
}
  
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    for(let i = 0; i < listaAmigos.length; i++){
        let item = document.createElement('li')
        item.textContent = listaAmigos[i]
        lista.appendChild(item)
    }
}

function sortearAmigo(){
    let ganador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]
    limpiarLista()
    let resultado =  document.getElementById('resultado')
    resultado.style.color = 'green'
    resultado.textContent = `El amigo sorteado es: ${ganador}`
    
}

function limpiarLista(){
    listaAmigos = []
    mostrarAmigos()
}