function gerar() {
    let numero = document.getElementById('numero');
    let tabuada = document.getElementById('tabuada');

    if (numero.value.length == 0) {
        alert('Digite um número!')
    } else {
        let valorNumero = Number(numero.value);
        tabuada.innerHTML = '';

        for (let i = 0; i <= 10; i++) {
            let opcao = document.createElement('option');
            let mult = valorNumero * i;

            opcao.text = `${valorNumero} X ${i} = ${mult}`;
            opcao.value = `tab${i}`;
            tabuada.appendChild(opcao);
        }
    }
}