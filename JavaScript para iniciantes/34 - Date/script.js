const data1 = new Date();
console.log(data1); // Data atual

const data2 = new Date('November 10 2025 00:00');
console.log(data2); // Data informada

const data3 = new Date(2019, 02, 9, 30);

// Mudando o ano
data3.setFullYear(2030)
console.log(data3);

// Alterando para string
console.log(data2.toDateString());

// Local da data
console.log(data1.toTimeString());

// Forma no Banco de Dados
console.log(data1.toISOString());