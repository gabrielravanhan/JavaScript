let num = document.getElementById('numero');
let lista = document.querySelector('select#lista');
let resultado = document.getElementById('resultado');
let valores = [];

function adicionar() {
    let valorNum = Number(num.value);

    if (numeroInvalido(valorNum) || foraDaLista(valorNum, valores)) {
        alert('Valor inválido ou já encontrado na lista.');
    } else {
        valores.push(valorNum);
        let option = document.createElement('option');
        option.text = `Valor ${valorNum} adicionado.`;
        lista.appendChild(option);
        resultado.innerHTML = '';
    }
    num.value = '';
    num.focus();
}

function numeroInvalido(valorNum) {
    if (valorNum < 1 || valorNum > 100) {
        return true;
    } else {
        return false;
    }
}

function foraDaLista(valorNum, valores) {
    if (valores.indexOf(valorNum) != -1) {
        return true;
    } else {
        return false;
    }
}

function finalizar() {
    if (valores.length != 0) {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let i in valores) {
            if (valores[i] > maior)
                maior = valores[i];
            if (valores[i] < menor)
                menor = valores[i];
            soma += valores[i];
        }
        media = soma / total;

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    } else {
        alert('Adicione valores antes de finalizar.');
    }
}