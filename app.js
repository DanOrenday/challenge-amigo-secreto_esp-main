// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Variables

let amigos = []; //Array de amigos



//funciones

//funcion para agregar amigos
function agregarAmigo(){  //Utilizamos el boton agregarAmigo del html 'Añadir'
    let nombreAmigo //Nombre de amigo
    nombreAmigo = document.getElementById("amigo").value;
    
    if(nombreAmigo.length > 1){ //Condicion si el nombre esta vacio
        amigos.push(nombreAmigo);
    } else {
        alert("Ingresa el nombre de un amigo");
        return;
    }
    //document.getElementById("listaAmigos").innerHTML = `<li>${amigos}</li>`;
    mostrarLista();
    limpiarCaja();
    return;
}

//Mostrar amigos en lista
function mostrarLista(){
let listaUl = document.getElementById("listaAmigos");
listaUl.innerHTML = "";
amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaUl.appendChild(li);
});
}


//funcion para sortear amigos
function sortearAmigo(){
    let amigoAleatorio = sortearAmigo; //Amigo sorteado
    if(amigos.length === 0){
        alert("No hay amigos en la lista");
        return;
    }
    amigoAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
    return;
}

//funcion limpiar
function limpiarCaja(){
    document.getElementById("amigo").value = "";
    return;
}



//funcion para reiniciar
/*function reiniciar(){
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    return;
}
    */