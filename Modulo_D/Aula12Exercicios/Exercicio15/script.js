function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    // Criando uma img com o id='foto'
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fAno.value.lenth == 0 || Number(fAno.value) > ano) {
        window.alert('Erro - Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imgs/menino.png');
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'imgs/moco.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imgs/adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imgs/idoso.png');
            }
        } else {
            genero = 'Mulher';

            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imgs/menina.png');
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'imgs/moca.png');
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imgs/adulta.png');
            } else {
                // Idosa
                img.setAttribute('src', 'imgs/idosa.png');
            }
        }

        // Centralizando o resultado
        res.style.textAlign = 'center';

        // Resultado
        res.innerHTML = `<p>${genero} com ${idade} anos.</p>`;

        // Adicionando a img criada anteriormente
        res.appendChild(img);
    }
}