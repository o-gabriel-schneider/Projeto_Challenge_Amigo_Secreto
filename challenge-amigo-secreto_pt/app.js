//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

// #1. Crie um array para armazenar os nomes

let listaDeNomes = [];


// #2. Implementa uma função para agregar amigos

function adicionarNomes () {
    let nome = document.querySelector('input').value;
    if (nome == '' || nome != String) {
        alert('Por favor, insira um nome.');
    } else {
        listaDeNomes.push(nome);
    }
    document.querySelector('input').value = '';
}
adicionarNomes();

// #3. Implementa uma função para atualizar a lista de amigos

function atualizarListaDeNomes () {
    listaInterface = document.getElementById('ListaDeNomesInterface');
    listaInterface.innerHTML = '';
    //Continuar
}