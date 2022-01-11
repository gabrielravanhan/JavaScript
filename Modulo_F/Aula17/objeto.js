let amigo = {
    nome: 'Rogério',
    sexo: 'M',
    peso: 123.6,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }
};
amigo.engordar(9.4);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);