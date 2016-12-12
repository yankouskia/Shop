'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Phones';

export function getAllPhones(mark = '') {
    const searchByMark = mark ? `(mark:"${mark}")` : '',
        query = `query{phones ${searchByMark} {
            mark
            model
            color
            wifi
            gps
            coresNumber
            ram
            memory
            camera
            diagonal
            operatingSystem
            price
        }}`;

    return dispatch => {
        request.get('/', {query}).then(({data}) => {
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
