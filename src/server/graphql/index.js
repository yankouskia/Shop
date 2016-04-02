'use strict';

import express from 'express';
import { graphql } from 'graphql';
import simpleSchema from './simple_schema';

const router = express.Router();

router
	.post('/graphql', (req, res) => {
		console.log(req.body);
		graphql(simpleSchema, req.body)
			.then((result) => {
				console.log('request');
				let response = JSON.stringify(result, null, 2);
				console.log(response)
				res.send(response);
			});
	});

export default router;
