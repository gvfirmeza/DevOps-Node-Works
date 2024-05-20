const express = require('express');
const app = express();
const Produto = require("./model/produto");

const produtos = [];

app.use(express.json());

app.post('/api/produto', (req, res) => {
 try{
  let produto = new Produto(req.body.id, req.body.nome, req.body.preco, req.body.descricao)
  let json1 = produto.toJson();
  produtos.push({json1});
  console.log(json1);
  return res.status(201).send({ message: 'Produto adicionado com sucesso!' });
 }catch(error){
   return res.status(5000).send({ 'error': error.message });
 }
});

app.get('/api/produto', (req, res) => {
     return res.status(200).send({ "produtos": produtos });
})

app.listen(3400, () => {
  console.log("Projeto Produto rodando na porta 3400");
});
