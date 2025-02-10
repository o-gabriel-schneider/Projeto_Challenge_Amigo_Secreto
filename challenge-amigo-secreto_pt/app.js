//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

// #1. Crie um array para armazenar os nomes

let listaDeNomes = [];

// #2. Implemente uma função para agregar amigos

function adicionarNomes() {
    let nome = document.querySelector('input').value.trim();
    if (nome == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaDeNomes.push(nome);
        atualizarListaDeNomes();
    }
    document.querySelector('input').value = '';
}

// #3. Implemente uma função para atualizar a lista de amigos

function atualizarListaDeNomes() {
    listaInterface = document.getElementById('listaDeNomesInterface');
    listaInterface.innerHTML = '';
    for (i = 0; i < listaDeNomes.length; i++) {
        let nome = listaDeNomes[i];
        let itemListaInterface = document.createElement('li');
        itemListaInterface.textContent = nome;
        listaInterface.appendChild(itemListaInterface);
    }
}

// #4. Implemente uma função para sortear os amigos

function sortearNome() {
    if (listaDeNomes.length == 0) {
        alert('Por favor, adicione nomes a sua lista.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
        let nomeSorteado = listaDeNomes[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        listaInterface.innerHTML = '';
        let mensagemResultado = `Seu amigo secreto sorteado é: ${nomeSorteado}`;
        resultado.innerHTML = mensagemResultado;
    }
}