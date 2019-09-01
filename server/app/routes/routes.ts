import { Application } from 'express';

import commonRoutes from './pages/common'

export default (app: Application) =>{
    commonRoutes(app);
}