'use strict';

import types from 'constants/ActionTypes/Computers';

const initialState = {
    computers: []
};

export function computers(state = initialState, action) {
    switch (action.type) {
        case types.GET_ALL_COMPUTERS:
            return {
                ...state,
                computers: action.computers,
            };

        default:
            return state;
    }
}
