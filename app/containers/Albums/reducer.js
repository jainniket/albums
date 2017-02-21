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
    ALBUM_LIST,
} from './constants';

const INITIAL_STATE = {
    albums: [],
};

function albumReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ALBUM_LIST:
            return { ...state, albums: action.payload };
        default:
            return state;
    }
}

export default albumReducer;
