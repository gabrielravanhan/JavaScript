// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [70, 70, 80];
console.log(mediaDoAluno(notas));

function mediaDoAluno(notas) {
    let media = calcularSoma(notas);
    if (media >= 90 && media <= 100)
        return 'A';
    else if (media >= 80 && media <= 89)
        return 'B';
    else if (media >= 70 && media <= 79)
        return 'C';
    else if (media >= 60 && media <= 69)
        return 'D';
    else
        return 'E';
}

function calcularSoma(notas) {
    let soma = 0;
    for (i of notas) {
        soma += i;
    }
    return soma / notas.length;
}