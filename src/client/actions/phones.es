'use strict';

import sendQuery from 'utils/graphql-request';

import types from 'constants/ActionTypes/Phones';

export function getAllPhones() {
	return dispatch => {
		sendQuery('{"query": "{  phones { mark model color operatingSystem memory price } }"}', {}).then(({data}) => {
			dispatch({ type: types.GET_ALL_PHONES, phones: data.phones });
		});
	};
}

export function addPhone(fields) {
    return {
        type: types.ADD_PHONE,
        fields,
    };
}

export function deletePhone(index) {
    return {
        type: types.DELETE_PHONE,
        index,
    };
}
