import {FETCH_BUCKETLIST_SUCCEEDED, LOGGED_IN} from './constants';

const reducer = (state = {bucketList: []}, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {...state, user: action.payload.data};
    case FETCH_BUCKETLIST_SUCCEEDED:
      return {...state, bucketList: action.payload.data};
  }
  return state;
};

export default reducer;
