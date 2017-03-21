// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import { navReducer } from './routes';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    nav: navReducer,
    ...asyncReducers,
  });
}
