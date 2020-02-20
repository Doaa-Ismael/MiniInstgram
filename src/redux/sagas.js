import {put, takeEvery, call} from 'redux-saga/effects';
import {
  ADD_NEW_PLACE,
  ADD_NEW_PLACE_FAILED,
  ADD_NEW_PLACE_SUCCEEDED, ADD_NEW_POST, ADD_NEW_POST_FAILED, ADD_NEW_POST_SUCCEEDED,
  FETCH_BUCKETLIST,
  FETCH_BUCKETLIST_FAILED,
  FETCH_BUCKETLIST_SUCCEEDED,
  FETCH_USER,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCEEDED,
} from './actionsTypes';
import * as API from './../services/api';

function* fetchBucketList(action) {
  try {
    const {data} = yield call(API.fetchBucketList, action.payload.userId);
    yield put({type: FETCH_BUCKETLIST_SUCCEEDED, payload: data});
  } catch (e) {
    yield put({type: FETCH_BUCKETLIST_FAILED, message: e.message});
  }
}

function* addNewPlace(action) {
  try {
    const {data} = yield call(API.addNewPlace, action.payload.place, action.payload.userId);
    yield put({type: ADD_NEW_PLACE_SUCCEEDED, payload: data});
  } catch (e) {
    yield put({type: ADD_NEW_PLACE_FAILED, message: e.message});
  }
}

function* addNewPost(action) {
  try {
    const {data} = yield call(API.addNewPost, action.payload.imgUri, action.payload.userId);
    yield put({type: ADD_NEW_POST_SUCCEEDED, payload: data});
  } catch (e) {
    yield put({type: ADD_NEW_POST_FAILED, message: e.message});
  }
}

function* fetchUser(action) {
  try {
    const {data} = yield call(API.fetchUser, action.payload.userId);
    yield put({type: FETCH_USER_SUCCEEDED, payload: data[0]});
  } catch (e) {
    yield put({type: FETCH_USER_FAILED, message: e.message});
  }
}

function* mySaga() {
  yield takeEvery(FETCH_BUCKETLIST, fetchBucketList);
  yield takeEvery(FETCH_USER, fetchUser);
  yield takeEvery(ADD_NEW_PLACE, addNewPlace);
  yield takeEvery(ADD_NEW_POST, addNewPost);
}

export default mySaga;
