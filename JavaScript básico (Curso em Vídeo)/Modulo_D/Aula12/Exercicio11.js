var idade = 10;

console.log(`Você tem ${idade} anos.`);

if (idade < 16) { // Condição alinhada
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}