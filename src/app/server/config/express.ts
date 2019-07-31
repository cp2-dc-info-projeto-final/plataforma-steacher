/*---------------Importações---------------*/

import express from 'express';
import { Application }  from 'express';

import bodyParser from 'body-parser';
import path from 'path';

import routes from '../routes/routes';

/*---------Declaração de Variáveis---------*/

const app: Application = express();

/*----------------Aplicação----------------*/

//Configurações

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, '../../../public/views'));

app.use('/css', express.static(path.join(__dirname, '../../../public/css')));

app.use('/js', express.static(path.join(__dirname, '../../../js')));

app.use(bodyParser.urlencoded({ extended: true }));

//Rotas

routes(app);

/*----------------Exportação---------------*/

export default app;