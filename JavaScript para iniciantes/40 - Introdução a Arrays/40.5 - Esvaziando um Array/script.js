const numeros = [1, 2, 3, 4, 5];
const valores = [1, 2, 3, 4, 5];
const values = [1, 2, 3, 4, 5];

// Solução 1 => Errada
//numeros = []

// Solução 2 => Certa
numeros.length = 0;
console.log(numeros);

// Solução 3 => Certa
valores.splice(0, valores.length);
console.log(valores);