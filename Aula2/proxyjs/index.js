const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    body: req.body
  };

  fs.appendFileSync(
    path.join("D:/DEV/DevOps-Node-Works/Aula2/proxyjs/logs", 'log.json'),
    JSON.stringify(logEntry) + ",\n"
  );
  console.log(logEntry);

  next();
});

app.post('/api/produto', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3400/api/produto', req.body);
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao enviar a solicitação para o servidor principal:', error);
   return res.status(500).json({ error: 'Erro ao enviar a solicitação para o servidor principal' });
  }
});

app.get('/api/produto', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3400/api/produto');
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar produtos do servidor principal:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos do servidor principal' });
  }
});

app.listen(5000, () => {
  console.log("Sidecar proxy de log rodando na porta 5000");
});
