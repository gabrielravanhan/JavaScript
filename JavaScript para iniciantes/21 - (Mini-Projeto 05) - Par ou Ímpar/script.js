// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou impar
exibirTipo(10);
function exibirTipo(limite) {
    let tipo;
    for (let i = 0; i <= limite; i++) {
        tipo = i % 2 === 0 ? 'PAR' : 'ÍMPAR';
        console.log(`${i} "${tipo}"`);
    }
}