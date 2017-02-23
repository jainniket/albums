import { call, put, takeLatest, take, cancel } from 'redux-saga/effects'
import { MUSICALBUMS } from '../App/apis'
import request from '../../utils/request'
import { ALBUMS_FETCH_REQUESTED, ALBUMS_FETCH_FAILED, ALBUMS_FETCH_SUCCEEDED } from './constants'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAlbums() {
    console.log('here');
    try {
        // Call our request helper (see 'utils/request')
        const albums = yield call(request, MUSICALBUMS);
        yield put({ type: ALBUMS_FETCH_SUCCEEDED, albums });
    } catch (error) {
        yield put({ type: ALBUMS_FETCH_FAILED, error });
    }
}

/*
 Starts fetchUser on each dispatched `ALBUMS_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */

function* albumData() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    const watcher = yield takeLatest(ALBUMS_FETCH_REQUESTED, fetchAlbums);
    // Suspend execution until location changes
    // yield take(ActionConst.PUSH);
    // yield cancel(watcher);
}

export default albumData;
