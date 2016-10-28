'use strict';

import Promise from 'bluebird';
import apolloConfig from './config/apollo';

export default (app) => {
    return new Promise(resolve => {

        apolloConfig(app);
        let port = app.get('apollo-port');

        app.listen(port, () => {
            console.log(`GraphQL Server is now running on http://localhost:${port}/graphql`);
            resolve();
        });

    });
}
