'use strict';

import request from 'superagent';

export default function sendQuery(query) {
    return new Promise((resolve, reject) => {
        request.post('http://localhost:3080/graphql')
            .send(query)
            .set({
                "Content-Type": 'application/json',
                Accept: 'application/json' 
            })
            .end((err, res) => {
                if (err || !res || !res.ok) {
                    reject(err);
                } else {
                    resolve(res.body, res);
                }
            });
    });
}
