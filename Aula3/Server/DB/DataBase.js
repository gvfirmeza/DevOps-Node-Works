const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbaula3', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('Conectado ao banco de dados'); })
.catch((error) => { console.log(`Erro ao conectar ao banco de dados: ${error}`); });