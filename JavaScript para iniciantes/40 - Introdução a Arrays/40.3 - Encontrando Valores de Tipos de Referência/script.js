const marcas = [
    {
        id: 1,
        nome: 'RO'
    },
    {
        id: 2,
        nome: 'LF'
    }
]

const marca = marcas.find(function (marca) {
    return marca.nome === 'RO';
});

console.log(marca);

// Utilizando Arrow Function
console.log(marcas.find((marca) => marca.nome === 'LF'));