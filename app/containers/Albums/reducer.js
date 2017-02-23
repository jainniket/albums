/*
 * Album Reducer
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
    ALBUMS_FETCH_SUCCEEDED,
    ALBUMS_FETCH_REQUESTED,
    ALBUMS_FETCH_FAILED,
} from './constants';

const INITIAL_STATE = {
    albums: [],
    error: false,
    loading: false,
};

function albumReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ALBUMS_FETCH_SUCCEEDED:
            return {
                ...state,
                albums: action.albums,
                error: false,
                loading: false,
            };
        case ALBUMS_FETCH_FAILED:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case ALBUMS_FETCH_REQUESTED:
            return {
                ...state,
                error: false,
                loading: true,
            };
        default:
            return state;
    }
}

export default albumReducer;
