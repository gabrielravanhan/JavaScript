// camelCase -> umDoisTres
/*
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Ligando...');
        }
    }
} */

// PascalCase -> UmDoisTres
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('Ligando');
        }
}

const celular = new Celular('MOTOROLA', 5.5, 5000);
console.log(celular);