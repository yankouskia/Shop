'use strict';

import types from 'constants/ActionTypes/Computers';

const initialState = {
    computers: [],
    computersInShop: JSON.parse(localStorage.getItem('computersInShop')) || []
};

export function computers(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_COMPUTERS:
            return {
                ...state,
                computers: action.computers,
            };

        case types.ADD_COMPUTER_TO_SHOP:
            action.computer.disabled = true;
            let computersInShop = [
                ...state.computersInShop,
                action.computer
            ]
            localStorage.setItem('computersInShop', JSON.stringify(computersInShop));
            return {
                ...state,
                computersInShop: computersInShop
            };
        case types.REMOVE_COMPUTER_FROM_SHOP:
            action.computer.disabled = false;
            computersInShop = state.computersInShop.filter(computer => computer !== action.computer);
            localStorage.setItem('computersInShop', JSON.stringify(computersInShop));
            return {
                ...state,
                computersInShop: computersInShop
            };

        default:
            return state;
    }
}
