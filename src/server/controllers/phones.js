'use strict';

import PhoneModel from '../models/phones';

const getAll = (req, res) => {
    console.log('getAll');
    PhoneModel.find({}, function(err, docs) {
        if(err) {
            res.send({error: err});
        } else {
            res.send({data: docs});
        }
    });
};

const add = (req, res) => {
    let {phone} = req.body;
    let phoneModel = new PhoneModel(phone);
    phoneModel.save(function(err, docs) {
        if(err) {
            console.log('error: ', err);
            res.send({error: err});
        }
        else {
            res.send({status: 'ok'});
        }
    });
};

export default {
    getAll,
    add
};
