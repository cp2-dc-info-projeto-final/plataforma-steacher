/*---------------Importações---------------*/
require('events').EventEmitter.defaultMaxListeners = 25;
import app from './config/express';
import { init } from './config/colors';
import { connect } from 'mongoose';

/*----------------Aplicação----------------*/

const port = process.env.PORT || 8000;

connect(
    "mongodb+srv://leonardolopesinf:BS5ly01lnNGFkpdp@steacher-mongodb-pg3ld.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(port, () => console.log(init("Servidor rodando com sucesso.")));