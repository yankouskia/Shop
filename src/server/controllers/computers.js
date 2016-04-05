'use strict';

import ComputerModel from '../models/computers';

const getAll = (req, res) => {
    console.log('getAll');
    ComputerModel.find({}, function(err, docs) {
        if(err) {
            res.send({error: err});
        } else {
            res.send({data: docs});
        }
    });
};

const add = (req, res) => {
    let {computer} = req.body;
    let computerModel = new ComputerModel(computer);
    computerModel.save(function(err, docs) {
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
