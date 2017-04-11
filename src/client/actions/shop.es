'use strict';

import request from 'utils/request';
import types from 'constants/ActionTypes/Shop';

export function addPhoneToShop(phone) {
    return {
        type: types.ADD_PHONE_TO_SHOP,
        phone
    }
}

export function removePhoneFromShop(phone) {
    return {
        type: types.REMOVE_PHONE_FROM_SHOP,
        phone
    }
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
