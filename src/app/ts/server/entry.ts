/*---------------Importações---------------*/

import app from './config/express';
import { init } from './config/colors';

/*----------------Aplicação----------------*/

app.listen(3000, () => console.log(init("Servidor rodando na porta 3000.")));