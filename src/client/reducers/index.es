'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';
import { phones } from './phones';
import { example } from './example';
import { computers } from './computers';
import { shop } from './shop';

const rootReducer = combineReducers({
	form: formReducer,
	/* your reducers */
	items,
	phones,
	example,
	computers,
	shop
});

export default rootReducer;
