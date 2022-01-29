const endereco = {
    rua: 'Chile',
    cidade: 'Barretos',
    cep: '24.680-793'
};

function exibirEndereco(endereco) {
    for (let key in endereco) {
        console.log(`${key}: ${endereco[key]}`);
    }
}

exibirEndereco(endereco);