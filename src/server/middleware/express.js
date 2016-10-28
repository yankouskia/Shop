'use strict';

import Promise from 'bluebird';
import expressConfig from './config/express';

export default (app) => {
    return new Promise(resolve => {

        expressConfig(app);
        let port = app.get('port');

        app.listen(port, () => {
            console.log(`Express Server is now running on http://localhost:${port}`);
            resolve();
        });
    });
}
