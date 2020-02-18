import {put, takeEvery, call} from 'redux-saga/effects';
import {
  FETCH_BUCKETLIST,
  FETCH_BUCKETLIST_FAILED,
  FETCH_BUCKETLIST_SUCCEEDED,
} from './constants';
import * as API from './../services/api';

function* fetchBucketList(action) {
  try {
    const {data} = yield call(API.fetchBucketList, '241EC7BE-E9DD-F088-3781-57BE4FDB5DDA');
    yield put({type: FETCH_BUCKETLIST_SUCCEEDED, data});
  } catch (e) {
    yield put({type: FETCH_BUCKETLIST_FAILED, message: e.message});
  }
};

function* mySaga() {
  yield takeEvery(FETCH_BUCKETLIST, fetchBucketList);
}

export default mySaga;
