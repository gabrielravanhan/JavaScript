const filme = {
    titulo: 'Shrek',
    ano: 2001,
    personagem: 'Lorde Farquaad'
}
exibirPropriedades(filme);
function exibirPropriedades(filme) {
    for (i in filme) {
        if (typeof filme[i] === 'string')
            console.log(i, filme[i]);
    }
}