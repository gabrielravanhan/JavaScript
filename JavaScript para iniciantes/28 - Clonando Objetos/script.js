const celular = {
    marcaCelular: 'MOTOROLA',
    tamanhoTela: {
        vertical: 155,
        horizontal: 69,
    },
    ligar: function () {
        console.log('Ligando...');
    }
}

const novoObjeto = Object.assign({
    bareria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = { ...celular };
console.log(objeto2);