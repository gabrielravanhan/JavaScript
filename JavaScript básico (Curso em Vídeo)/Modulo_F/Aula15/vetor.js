let valores = [8, 1, 7, 4, 2, 9];

valores.sort();

/* Forma feia
console.log(valores); */

/* Forma bonitinha
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o velor ${valores[i]};`);
} */

// Forma bonitinha e facilitada 🥵
for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]};`);
}