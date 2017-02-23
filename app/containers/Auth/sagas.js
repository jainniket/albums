import { call, put, takeLatest, take, cancel } from 'redux-saga/effects'
import { USER_LOGIN_REQUESTED, USER_LOGIN_FAILED, USER_LOGIN_SUCCEEDED, PASSWORD_CLEAR } from './constants'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authentication(action) {
    try {
        const response = yield call([firebase.auth(), firebase.auth().signInWithEmailAndPassword], action.payload.email, action.payload.password);
        yield put({ type: USER_LOGIN_SUCCEEDED, user: response });
        yield put({ type: PASSWORD_CLEAR });
        Actions.albums();
    } catch (e) {
        yield put({ type: USER_LOGIN_FAILED, error: e });
        yield put({ type: PASSWORD_CLEAR });
    }
}

/*
 Starts fetchUser on each dispatched `ALBUMS_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */

function* authenticateUser() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution.
    const watcher = yield takeLatest(USER_LOGIN_REQUESTED, authentication);
    // Suspend execution until location changes
    // yield take(ActionConst.PUSH);
    // yield cancel(watcher);
}

export default authenticateUser;
