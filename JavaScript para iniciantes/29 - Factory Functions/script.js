/*
const celular = {
    marcaCelular: 'MOTOROLA',
    tamanhoTela: {
        vertical: 155,
        horizontal: 69,
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log('Ligando...');
    }
} */

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Ligando...');
        }
    }
}

const celular1 = criarCelular('MOTOROLA', 5.5, 500);

console.log(celular1);