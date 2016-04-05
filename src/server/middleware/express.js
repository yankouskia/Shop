 'use strict';

import path from 'path';
import helmet from 'helmet';
import hpp from 'hpp';
import bodyParser from 'body-parser';
import apiRouter from '../routes/api';
import staticsRouter from '../routes/statics';
import graphql from '../graphql';
import env from '../../../env';

const errorHandler = (err, req, res, next) => {
    let errData = err.message ? err.message : err;

    res.status(err.status || 500);

    if (req.accepts('json')) {
        res.json({error: true, data: errData});
    } else {
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    }
};

export default (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.set('port', env.get('express:port'));

    // some secure headers
    app.use(helmet.xssFilter());
    app.use(helmet.frameguard('sameorigin'));
    app.use(helmet.hidePoweredBy());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(hpp());
    app.use('/', apiRouter);
    app.use('/graphql', graphql);
    app.use('/', staticsRouter);

    app.use(errorHandler);

    console.log('express configured');
};
