import { combineReducers } from 'redux'
import RootReducer from './containers/Root/reducer'
import AlbumReducer from './containers/Albums/reducer'
import AuthReducer from './containers/Auth/reducer'

const initialState = {
    scene: {},
};

function routeReducer(state = initialState, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
    case "focus":
        return {
            ...state,
            scene: action.scene,
        };
    case "replace":
        return {
            ...state,
            scene: action.scene,
        };
    default:
        return state;
    }
}

export default combineReducers({
    route: routeReducer,
    root: RootReducer,
    albums: AlbumReducer,
    auth: AuthReducer,
});
