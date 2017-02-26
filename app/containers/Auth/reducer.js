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

import { fromJS } from 'immutable';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CLEAR,
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  USER_LOGIN_REQUESTED,
} from './constants';

const INITIAL_STATE = fromJS({
  email: '',
  password: '',
  loading: false,
  error: false,
});

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      // return { ...state, email: action.payload };
      return state
        .set('email', action.payload);
    case PASSWORD_CHANGED:
      return state
        .set('password', action.payload);
    case PASSWORD_CLEAR:
      return { ...state, password: '' };
    case USER_LOGIN_SUCCEEDED:
      return state
        .set('loading', false)
        .set('error', false);
    case USER_LOGIN_FAILED:
      return state
        .set('loading', false)
        .set('error', action.error);
    case USER_LOGIN_REQUESTED:
      return state
        .set('loading', true)
        .set('error', false);
    default:
      return state;
  }
}

export default authReducer;
