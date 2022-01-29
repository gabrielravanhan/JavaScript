function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('João Luiz', 'Ubatuba', '73.444-698');
const endereco2 = new Endereco('João Luiz', 'Ubatuba', '73.444-698');

function saoIguais(endereco1, endereco2) {
    if (endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep)
        return true;
    else
        return false
}

function temEnderecoMemoriaIguais() {
    if (endereco1 === endereco2)
        return true;
    else
        return false;
}

console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));