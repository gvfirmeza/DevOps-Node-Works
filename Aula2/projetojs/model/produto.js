class Produto{
    
     constructor(id="",nome="",preco=0,descricao=""){
        this.id =id;
        this.nome =nome;
        this.preco = preco;
        this.descricao=descricao;
     }
 
    toJson(){
      return {'id':this.id, 'nome':this.nome, 'preco': this.preco,'descricao':this.descricao };
    }
}


module.exports = Produto