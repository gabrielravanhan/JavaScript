const numeros = [10, 25, 700, 10];

// Descobrindo se um valor está no array
console.log(numeros.indexOf(25)); // Está => index: 1
console.log(numeros.indexOf(100)); // Não está => index: -1
console.log(numeros.indexOf(700) !== -1); // True
console.log(numeros.includes(77)); // False

// Devolve o index da última posição que o valor aparece
console.log(numeros.lastIndexOf(10));