// Tipo Primitivo
const nome = 'Ronaldinho Rogério';

// Tipo objeto
const outroNome = new String('Fernandinho Ferdinando');

console.log(typeof nome); // string
console.log(typeof outroNome); // object

// Tamanho da string
console.log(outroNome.length); // 11

// Pesquisando por índice
console.log(outroNome[3]); // n

// Analisando se há palavras, letras
console.log(outroNome.includes('Fernandinho')); // true
console.log(outroNome.includes('Brasil')); // false

// Inicia com
console.log(outroNome.startsWith('F')); // true
console.log(outroNome.startsWith('J')); // false

// Termina com
console.log(outroNome.endsWith('o')); // true
console.log(outroNome.endsWith('y')); // false

// Índice
console.log(outroNome.indexOf('Ferdinando')); // 12

// Troca uma palavra por outra
console.log(nome.replace('Rogério', 'Sidney')); // Ronaldinho Sidney

// -------------------------------------------------------------- //
const pais = ' Sudão  do  Sul';
console.log(pais);

// Remove os espaços desnecessários
console.log(pais.trim()); // 'Brasil'

// Separa por algo
console.log(pais.split(' '));