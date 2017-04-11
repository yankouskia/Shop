'use strict';

import types from 'constants/ActionTypes/Phones';

const initialState = {
    phones: [],
    phonesInShop: JSON.parse(localStorage.getItem('phonesInShop')) || []
};

export function phones(state = initialState, action) {
    switch (action.type) {
        case types.ADD_PHONE:
            return {
                ...state,
                phones: [
                    ...state.phones,
                    action.phone
                ]
            };

        case types.DELETE_PHONE:
            return {
                ...state,
                phones: [
                    ...state.phones.slice(0, action.index),
                    ...state.phones.slice(+action.index + 1),
                ]
            };

        case types.GET_ALL_PHONES:
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
            localStorage.setItem('phonesInShop', JSON.stringify(phonesInShop));
            return {
                ...state,
                phonesInShop: phonesInShop
            };

        case types.REMOVE_PHONE_FROM_SHOP:
        action.phone.disabled = false;
            phonesInShop = state.phonesInShop.filter(phone => phone !== action.phone);;
            localStorage.setItem('phonesInShop', JSON.stringify(phonesInShop));
            return {
                ...state,
                phonesInShop: phonesInShop
            };

        default:
            return state;
    }
}
