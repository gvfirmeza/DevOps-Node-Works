const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./Model/user');
const Calculadora = require('./Controller/calculadora');

let users = new Users(1, 'Jerer', 'j@gmail.com', '123');

console.log("\nid :",users.id);
console.log(users);

let calculadora = new Calculadora(10, 5);
console.log("\nsoma :",calculadora.getSoma());
console.log("subtração :",calculadora.getSubtracao());

app = express();
app.use(cors());
app.use(bodyParser.json());

app.post ('/api/users', (req, res) => {

    if(req.body.id && req.body.nome && req.body.email && req.body.senha){
        let novoUser = new Users(req.body.id, req.body.nome, req.body.email, req.body.senha);
        return res.status(200).json(novoUser);
    } else {
        return res.status(400).json({message: 'Dados inválidos'});
    }

});

app.listen(3300, () => {
    console.log('Server is running on port 3300');
});