// Primeira forma
let faixas1 = [
    {
        tooltip: 'Até R$1200',
        minimo: 1001,
        maximo: 1200
    },
    {
        tooltip: 'Até R$1000',
        minimo: 801,
        maximo: 1000
    },
    {
        tooltip: 'Até R$800',
        minimo: 0,
        maximo: 800
    }
];

// Segunda forma (Factory function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('Até 1500', 1201, 1500),
    criarFaixaPreco('Até 1800', 1501, 1800)
];

// Terceira forma
function CriarFaixa(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new CriarFaixa('Até 2000', 1801, 2000),
    new CriarFaixa('Até 2200', 2001, 2200)
]

console.log(faixas1);
console.log(faixas2);
console.log(faixas3);