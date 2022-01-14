// nome = verbo + substantivo
let corSite = 'azul';

function mudaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);

mudaCor('verde', 'claro');
console.log(corSite);