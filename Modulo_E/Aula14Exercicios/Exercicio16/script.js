function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var contagem = document.getElementById('contagem');

    var valorInicio = Number(inicio.value);
    var valorFim = Number(fim.value);
    var valorPasso = Number(passo.value);

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = `<p>Impossível contar!</p>`;
    } else {
        contagem.innerHTML = `Contando:<br/>`;

        if (valorPasso == 0) {
            alert('Passo inválido! Considerando PASSO 1');

            if (valorInicio > valorFim) {
                for (var i = valorInicio; i >= valorFim; i--) {
                    var span = document.createElement('span');
                    span.innerHTML = `${i} `;
                    contagem.appendChild(span);
                }
            } else {
                for (var i = valorInicio; i <= valorFim; i++) {
                    var span = document.createElement('span');
                    span.innerHTML = `${i} `;
                    contagem.appendChild(span);
                }
            }
        } else if (valorInicio > valorFim) {
            for (var i = valorInicio; i >= valorFim; i = i - valorPasso) {
                var span = document.createElement('span');
                span.innerHTML = `${i} `;
                contagem.appendChild(span);
            }
        } else {
            for (var i = valorInicio; i <= valorFim; i = i + valorPasso) {
                var span = document.createElement('span');
                span.innerHTML = `${i} `;
                contagem.appendChild(span);
            }
        }
    }
}