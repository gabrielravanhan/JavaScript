let idade = prompt('Informe a sua idade:');

alert(calcularIdade(idade));

function calcularIdade(idade) {
    let valor = Number(idade)
    if (valor > 17)
        return 'Maior de idade';
    else if (valor > -1 && valor < 18)
        return 'Menor de idade';
    else
        return 'Idade inválida ou não informada';
}