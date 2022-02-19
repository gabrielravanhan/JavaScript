const listaConvidados = ['Gabriel', 'Sidney', 'Bidu', 'LF', 'Ronan'];

function verificarConvidado() {
    let nome = document.getElementById('nome');

    if (nome.value.length === 0 || convidou.value.length === 0)
        alert('Preencha');
    else
        document.getElementById('resposta').innerHTML = verificandoConvidado(nome);
}

function verificandoConvidado(nome) {
    if (listaConvidados.includes(nome.value))
        return 'Você pode entrar!';
    else
        return 'Você não pode entrar!';
}