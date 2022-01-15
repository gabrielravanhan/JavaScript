// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number

//Truthy
// Restantes dos valores

let corPersonalizada = '';
let corPadrao = 'preto';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);