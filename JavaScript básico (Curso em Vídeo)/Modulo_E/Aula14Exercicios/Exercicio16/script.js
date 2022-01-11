function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let contagem = document.getElementById('contagem');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = 'Impossível contar!';
    } else {
        contagem.innerHTML = 'Contando:<br/>';

        let valorInicio = Number(inicio.value);
        let valorFim = Number(fim.value);
        let valorPasso = Number(passo.value);

        if (valorPasso <= 0) {
            alert('Passo inválido! Considerando PASSO 1');
            valorPasso = 1;
        }

        if (valorInicio > valorFim) {
            for (let i = valorInicio; i >= valorFim; i -= valorPasso) {
                contagem.innerHTML += ` ${i} \u{1F449}`; // \u{1F449} = código do emoji da mão apontando o dedo para o lado
            }
        } else {
            for (let i = valorInicio; i <= valorFim; i += valorPasso) {
                contagem.innerHTML += `${i} \u{1F449}`; // \u{1F449} = código do emoji da mão apontando o dedo para o lado
            }
        }
        contagem.innerHTML += `\u{1F3C1}`; // \u{1F3C1} = código do emoji da bandeira
    }
}