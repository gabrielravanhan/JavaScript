const pessoa = {
    nome: 'Gabriel',
    idade: '17'
}
for (let i in pessoa) {
    console.log(i);
}

let cores = ['Azul', 'Preto', 'Vermelho'];
for (let i in cores) {
    console.log(i, cores[i]);
}