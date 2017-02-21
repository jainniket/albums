import { combineReducers } from 'redux'
import RootReducer from './containers/Root/reducer'
import AlbumReducer from './containers/Albums/reducer'
import AuthReducer from './containers/Auth/reducer'

export default combineReducers({
    root: RootReducer,
    albums: AlbumReducer,
    auth: AuthReducer,
});
