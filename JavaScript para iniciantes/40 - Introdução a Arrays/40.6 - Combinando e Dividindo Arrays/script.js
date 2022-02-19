const primeiro = [4, 6, 8];
const segundo = [12, 14, 16];

// Combinando
const combinado = primeiro.concat(segundo);
console.log(combinado);

// Dividindo
const dividido = combinado.slice(1, 4);
console.log(dividido);

// ----- Operador Spred ----- \\
// Combinar
const combinar = [...primeiro, ...segundo, 'a']; 
console.log(combinar);