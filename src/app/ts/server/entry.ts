/*---------------Importações---------------*/

import app from './config/express';
import { message, error } from './config/colors';

/*----------------Aplicação----------------*/

app.listen(3000, () => console.log(error("Servidor rodando na porta 3000.")));
