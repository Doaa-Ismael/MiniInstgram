import {FETCH_BUCKETLIST, ADD_NEW_PLACE, LOGGED_IN} from './constants';

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

export const loggedIn = user => ({
  type: LOGGED_IN,
  payload: {
    data: user,
  },
});
