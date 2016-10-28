'use strict';

import ComputerModel from '../models/computers';
import PhoneModel from '../models/phones';

import Promise from 'bluebird';

function findAll(model) {
    return new Promise((resolve, fail) => {
        model.find({}, (err, docs) => {
            if (err) {
                fail(err);
            } else {
                resolve(docs);
            }
        });
    });
}

export default {
    RootQuery: {
        computers() {
            return findAll(ComputerModel);
        },
        phones() {
            return findAll(PhoneModel);
        }
    }
};
