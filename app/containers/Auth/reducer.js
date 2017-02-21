/*
 * Auth Reducer
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
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    PASSWORD_CLEAR,
} from './constants';

const INITIAL_STATE = {
    email: '',
    password: '',
};

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case PASSWORD_CLEAR:
            return { ...state, password: '' };
        default:
            return state;
    }
}

export default authReducer;
