// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [70, 70, 80];
console.log(mediaDoAluno(notas));

function mediaDoAluno(notas) {
    let soma = 0;
    for (i = 0; i <= notas.length - 1; i++) {
        soma += notas[i];
    }

    let media = soma / notas.length;
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