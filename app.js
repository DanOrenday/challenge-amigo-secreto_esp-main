// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let texAreaAmigo = document.getElementById('amigo')
let amigos = [];
let amigoSecreto = generarAmigoSecreto;

validarNombre()

function validarNombre() {
    amigos = texAreaAmigo.value;
if (texAreaAmigo = ' ') {
    alert('Por favor, inserte un nombre.')
} else {
    
}
}

function generarAmigoSecreto() {
    return amigoSecreto =  Math.floor(Math.random()*amigos)+1;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
