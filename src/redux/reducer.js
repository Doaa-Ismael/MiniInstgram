import {
  ADD_NEW_PLACE_SUCCEEDED,
  ADD_NEW_POST_SUCCEEDED,
  FETCH_BUCKETLIST_SUCCEEDED,
  FETCH_USER_SUCCEEDED,
} from './actionsTypes';

const initialState = {
  bucketList: [],
  user: {},
  newsfeeds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCEEDED:
      return {...state, user: action.payload};
    case FETCH_BUCKETLIST_SUCCEEDED:
      return {...state, bucketList: action.payload};
    case ADD_NEW_PLACE_SUCCEEDED:
      return {...state, bucketList: [{...action.payload}, ...state.bucketList]};
    case ADD_NEW_POST_SUCCEEDED:
      const posts = state.user.posts
        ? [{img: action.payload.img}, ...state.user.posts]
        : [{img: action.payload.img}];
      const newSatte = {
        ...state,
        user: {
          ...state.user,
          posts,
        },
        newsfeeds: [{img: action.payload.img}, ...state.newsfeeds],
      };
      return newSatte;
    default:
      return state;
  }
};

export default reducer;
