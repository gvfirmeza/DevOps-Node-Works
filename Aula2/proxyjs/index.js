const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');
const { time } = require('console');

const app = express(); // Habilitando o app

app.use(express.json()); // Habilitando o uso de JSON

app.use((req,res,next) => {

    const logEntry = {
        timeStamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
        body: req.body
    };

    fs.appendFileSync(
        path.join("D:/DEV/DevOps-Node-Works/devops/proxyjs/logs" , "log.json"),
        JSON.stringify(logEntry) + "\n"
    );

    console.log(logEntry);
    next();
});

const productProxy = createProxyMiddleware({
    target: 'http://localhost:3030',
    changeOrigin: true
});

app.use('/', productProxy);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});