import { Application } from 'express';
import auth from './auth';
import user from './user';
import subject from './subject';
import course from './course';
import schoolClass from './schoolClass';

export default (app: Application) =>{
    auth(app);
    user(app);
    subject(app);
    course(app);
    schoolClass(app);
}