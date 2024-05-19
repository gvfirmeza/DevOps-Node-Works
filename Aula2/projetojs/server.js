const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Produto = require('./model/produto');	

app = express();
const produtos = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/produto', async (req, res) => {
    
    let id = req.body.id;
    let nome = req.body.nome;
    let preco = req.body.preco;
    let descricao = req.body.descricao;

    let prod = new Produto(id, nome, preco, descricao);
    
    console.log("estou no projeto \n" , prod);

    return res.status(200).json({"nome":prod.nome, "mensagem" : "Produto cadastrado com sucesso!"});

});

app.listen(3030, () => {
    console.log('Server running on port 3030');
});