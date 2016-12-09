'use strict';

import types from 'constants/ActionTypes/Shop';

const initialState = {
    phonesInShop: []
};

export function shop(state = initialState, action) {
    switch (action.type) {

        case types.GET_ALL_ITEMS:
            return {
                ...state,
                phones: action.phones
            };

        default:
            return state;
    }
}