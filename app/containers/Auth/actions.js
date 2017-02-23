/*
 * Auth Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    PASSWORD_CLEAR,
    USER_LOGIN_REQUESTED,
} from './constants';

export function emailChanged(email) {
    return {
        type: EMAIL_CHANGED,
        payload: email,
    };
}

export function passwordChanged(password) {
    return {
        type: PASSWORD_CHANGED,
        payload: password,
    };
}

export function passwordClear() {
    return {
        type: PASSWORD_CLEAR,
    };
}

export function loginUser(email, password) {
    return {
        type: USER_LOGIN_REQUESTED,
        payload: { email, password },
    };
}
