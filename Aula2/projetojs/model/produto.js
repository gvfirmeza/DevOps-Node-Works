class Produto {

    constructor(id="", nome="", preco=0, descricao="") {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

module.exports = Produto;