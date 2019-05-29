const express = require('express');
const app = express();
app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));
app.get('/', (req, resp) => {
    resp.send(`
        <!DOCTYPE html>
        <html lang="pr-br">
        <head>
            <meta charset="UTF-8">
            <title>Testando server...</title>
        </head>
        <body>
            <h1>Testando server...</h1>
        </body>
        </html>
        `);
});
