'use strict';

import types from 'constants/ActionTypes/Phones';

const initialState = {
    phones: []
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

        default:
            return state;
    }
}
