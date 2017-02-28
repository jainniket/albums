// import { combineReducers } from 'redux'
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
  scene: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case 'focus':
      return state.merge({ scene: action.scene });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    ...asyncReducers,
  });
}
