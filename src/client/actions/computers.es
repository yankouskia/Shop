'use strict';

import sendQuery from 'utils/graphql-request';

import types from 'constants/ActionTypes/Computers';

export function getAllComputers() {
	return dispatch => {
		sendQuery('{"query": "{  computers { mark model color operatingSystem memory price } }"}', {}).then(({data}) => {
			dispatch({ type: types.GET_ALL_COMPUTERS, computers: data.computers });
		});
	};
}
