function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('As Magníficas Aventuras de Ro Furlan', '😎😎😎', 'Ro Furlan');

console.log(postagem);