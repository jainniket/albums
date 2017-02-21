/*
 * Root Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
    LOGIN_STATUS,
} from './constants';

const INITIAL_STATE = {
    login: null,
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_STATUS:
            return { ...state, login: action.payload };
        default:
            return state;
    }
}

export default rootReducer;
