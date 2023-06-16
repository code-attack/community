import { Application, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from '../routes';

export const loader = (app: Application) => {
    app.use(json());

    app.use(morgan('dev'));
    app.use(cors());

    app.use('/', router);

    app.get('/status', (req, res) => {
        return res.json({});
    });
};
