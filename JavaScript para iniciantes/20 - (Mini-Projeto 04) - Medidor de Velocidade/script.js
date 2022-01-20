// Velocidade máxima de até 70
// a cada 5km acima, ganha 1 ponto na carteira
// Math.floor()
// Caso o número de pontos for maior que 12 => 'Carteira Suspendida'
verificarVelocidade(180);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
        console.log('Ok');
    else {
        const pontos = Math.floor((velocidade - 70) / 5);
        console.log('Você ultrapassou o limite de velocidade!');
        if (pontos < 12)
            console.log(`Pontos: ${pontos}`);
        else
            console.log('Carteira Suspendida');
    }
}