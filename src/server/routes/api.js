'use strict';

import express from 'express';
import phonesCtrl from '../controllers/phones';
import computersCtrl from '../controllers/computers'
import printersCtrl from '../controllers/printers'

const router = express.Router();

router
    .post('/phones/add', phonesCtrl.add)
    .get('/phones/getAll', phonesCtrl.getAll);

router
    .post('/computers/add', computersCtrl.add)
    .get('/computers/getAll', computersCtrl.getAll);

router
    .post('/printers/add', printersCtrl.add)
    .get('/printers/getAll', printersCtrl.getAll);

export default router;
