// Se a hora estiver entre 06:00 e 12:00 = Bom dia!
// Se estiver entre 12:00 e 18:00 = Boa tarde!
// Caso contrário = Boa noite!
let hora = new Date().getHours();

if (hora >= 6 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}