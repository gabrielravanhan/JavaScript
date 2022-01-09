let valores = [];
let resultado = document.getElementById('resultado');

function adicionar() {
    let num = document.getElementById('numero');
    let lista = document.querySelector('select#lista');
    let valorNum = Number(num.value);

    if (num.value.length == 0 || valorNum < 1 || valorNum > 100 || valores.indexOf(valorNum) != -1) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        num.value = '';
        resultado.innerHTML = '';
        let option = document.createElement('option');
        option.text = `Valor ${valorNum} adicionado.`
        lista.appendChild(option);
        valores.push(valorNum);
    }
}

function finalizar() {
    if (document.getElementById('lista').length != 0) {
        resultado.innerHTML = '';
        let p = [];

        for (let i = 0; i <= 4; i++) {
            p[i] = document.createElement('p');
            resultado.appendChild(p[i]);
        }

        p[0].innerHTML = aoTodo();
        p[1].innerHTML = maiorValor();
        p[2].innerHTML = menorValor();
        p[3].innerHTML = somaTotal();
        p[4].innerHTML = media();
    } else {
        alert('Adicione valores antes de finalizar.');
    }
}

function aoTodo() {
    return `Ao todo, temos ${valores.length} números cadastrados.`;
}

function maiorValor() {
    valores.sort();
    return `O maior valor informado foi ${valores[valores.length - 1]}.`;
}

function menorValor() {
    valores.sort();
    return `O menor valor informado foi ${valores[0]}.`;
}

function somaTotal() {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[0 + i];
    }
    return `Somando todos os valores, temos ${soma}`;
}

function media() {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma += valores[0 + i];
    }
    return `A média dos valores digitados é ${soma / valores.length}`;
}