import {FETCH_BUCKETLIST, ADD_NEW_PLACE, FETCH_USER, ADD_NEW_POST} from './actionsTypes';

export const fetchBucketList = userId => ({
  type: FETCH_BUCKETLIST,
  payload: {
    userId,
  },
});

export const addNewPlace = (place, userId) => ({
  type: ADD_NEW_PLACE,
  payload: {
    userId,
    place,
  },
});

export const addNewPost = (imgUri, userId) => ({
  type: ADD_NEW_POST,
  payload: {
    userId,
    imgUri,
  },
});

export const fetchUser = userId => ({
  type: FETCH_USER,
  payload: {
    userId,
  },
});
