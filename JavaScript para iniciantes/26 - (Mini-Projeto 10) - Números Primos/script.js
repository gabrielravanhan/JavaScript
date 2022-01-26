exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let i = 2; i <= limite; i++) {
        if (verificarPrimo(i) === true)
            console.log(i);
    }
}

function verificarPrimo(i) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0)
            return false;
    }
    return true;
}