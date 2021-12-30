function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        // MANHÃ
        img.src = 'imgs/fotomanha.png';
        document.body.style.background = '#faaf2e';
    } else if (hora >= 12 && hora <= 18) {
        // TARDE
        img.src = 'imgs/fototarde.png';
        document.body.style.background = '#eda484';
    } else {
        // NOITE
        img.src = 'imgs/fotonoite.png';
        document.body.style.background = '#41324f';
    }
}