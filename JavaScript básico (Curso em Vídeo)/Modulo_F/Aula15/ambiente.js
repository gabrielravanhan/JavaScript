let num = [9, 5, 7];

num.push(1); // Adiciona o valor 1 na última posição

num.sort(); // Deixa o vetor em ordem crescente

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(7); // Busca a posição do valor informado. Caso ele não exista no vetor, marcará como posição "-1"

if (pos == -1) {
    console.log('O valor não existe!');
} else {
    console.log(`O valor está na posição ${pos}`);
}