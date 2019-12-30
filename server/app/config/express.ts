/*---------------Importações---------------*/

import express from 'express';
import { Application }  from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';

import routes from '../routes/routes';

/*---------Declaração de Variáveis---------*/

const app: Application = express();

/*----------------Aplicação----------------*/

//Configurações

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

app.use(cors());

//Rotas

routes(app);

/*----------------Exportação---------------*/

export default app;