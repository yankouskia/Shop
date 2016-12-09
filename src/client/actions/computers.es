'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Computers';

export function getAllComputers(mark = '') {
    const searchByMark = mark ? `(mark:"${mark}")` : '',
        query = `query{computers ${searchByMark} {
            mark
            model
            color
            wifi
            isLaptop
            diagonal
            coresNumber
            usb2
            usb3
            ram
            memory
            videocard
            videomemory
            processor
            operatingSystem
            price
        }}`;

    return dispatch => {
        request.get('/', {query}).then(({data}) => {
            dispatch({ type: types.GET_ALL_COMPUTERS, computers: data.computers });
        });
    };
}

export function addComputerToShop(computer) {
    return {
        type: types.ADD_COMPUTER_TO_SHOP,
        computer
    }
}

export function removeComputerFromShop(computer) {
    return {
        type: types.REMOVE_COMPUTER_FROM_SHOP,
        computer
    }
}
