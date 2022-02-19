const valores = [1, 2, 3];
console.log(valores);

// Add no início
valores.unshift(0);
console.log(valores);

// Add no meio
valores.splice(3, 0, 2.5)
console.log(valores);

// Add no fim
valores.push(4);
console.log(valores);