'use strict';

import types from 'constants/ActionTypes/Computers';

const initialState = {
    computers: [],
    computersInShop: []
};

export function computers(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_COMPUTERS:
            return {
                ...state,
                computers: action.computers,
            };

        case types.ADD_COMPUTER_TO_SHOP:
            return {
                ...state,
                computersInShop: [
                    ...state.computersInShop,
                    action.computer
                ]
            };

        default:
            return state;
    }
}