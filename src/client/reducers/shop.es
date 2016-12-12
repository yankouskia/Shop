'use strict';

import types from 'constants/ActionTypes/Shop';

const initialState = {
    phonesInShop: []
};

export function shop(state = initialState, action) {
  console.log(action.type);
    switch (action.type) {

        case types.GET_ALL_ITEMS:
            return {
                ...state,
                phones: action.phones
            };

        case types.ADD_PHONE_TO_SHOP:
            action.phone.disabled = true;
            let phonesInShop = [
                ...state.phonesInShop,
                action.phone
            ];
            return {
                ...state,
                phonesInShop: phonesInShop
            };

        case types.REMOVE_PHONE_FROM_SHOP:
            action.phone.disabled = false;
            phonesInShop = state.phonesInShop.filter(phone => phone !== action.phone);
            //localStorage.setItem('phonesInShop', JSON.stringify(phonesInShop));
            return {
                ...state,
                phonesInShop: phonesInShop
            };

        case types.ADD_COMPUTER_TO_SHOP:
            action.computer.disabled = true;
            let computersInShop = [
                ...state.computersInShop,
                action.computer
            ]
            return {
                ...state,
                computersInShop: computersInShop
            };
        case types.REMOVE_COMPUTER_FROM_SHOP:
            action.computer.disabled = false;
            computersInShop = state.computersInShop.filter(computer => computer !== action.computer);
            //localStorage.setItem('computersInShop', JSON.stringify(computersInShop));
            return {
                ...state,
                computersInShop: computersInShop
            };

        default:
            return state;
    }
}
