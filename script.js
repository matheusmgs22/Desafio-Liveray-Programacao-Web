const fila = []; // Array para armazenar os elementos da fila
const filaElement = document.getElementById('fila');
const nomeClienteInput = document.getElementById('nome');
const corFichaInput = document.getElementById('cor');
const btnAdicionar = document.querySelector('form button');
const btnExcluirPrimeiro = document.getElementById('btn-excluir-primeiro');

btnAdicionar.addEventListener('click', adicionarCliente);
btnExcluirPrimeiro.addEventListener('click', excluirPrimeiroCliente);

function adicionarCliente(event) {
    event.preventDefault(); // Evitar que o formulário seja submetido

    const nome = nomeClienteInput.value;
    const cor = corFichaInput.value;

    if (nome && cor) {
        const cliente = { nome, cor };
        fila.push(cliente); // adiciona o cliente no array

        renderizarFila();
        limparCampos();
    } else {
        alert("Preencha o Nome do cliente!");
    }
}

function renderizarFila() {
    filaElement.innerHTML = '';

    fila.forEach((cliente, index) => {
        const clienteElement = document.createElement('div');
        clienteElement.classList.add('cliente');

        const numeroElement = document.createElement('div');
        numeroElement.classList.add('numero');
        numeroElement.textContent = index + 1; // Número do cliente na fila
        numeroElement.style.backgroundColor = cliente.cor;

        const nomeElement = document.createElement('span');
        nomeElement.classList.add('nome');
        nomeElement.textContent = cliente.nome;

        clienteElement.appendChild(numeroElement);
        clienteElement.appendChild(nomeElement);

        filaElement.appendChild(clienteElement);
    });
}

function limparCampos() {
    nomeClienteInput.value = '';
    corFichaInput.value = '#000000'; // Definir cor padrão
}

function excluirPrimeiroCliente() {
    if (fila.length > 0) {
        fila.shift(); // Remove o primeiro elemento do array
        renderizarFila(); // Renderiza a fila atualizada
    } else {
        alert('Não há clientes na fila.');
    }
}
