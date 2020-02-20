import reducer from '../src/redux/reducer';
import {loggedIn} from '../src/redux/actionCreators';
import {ADD_NEW_PLACE_SUCCEEDED, FETCH_BUCKETLIST_SUCCEEDED} from '../src/redux/actionsTypes';

describe('Reducer', () => {
  it('Logged In', () => {
    const user = {name: 'Doaa', age: 23, email: 'doaaismael@outlook.com'};
    const action = loggedIn(user);
    const newState = reducer({}, action);
    expect(newState.user).toMatchObject(user);
  });
  it('Fetch bucketlist succeeded', () => {
    const bucketList = [{place: 'Cairo'}, {place: 'Alex'}];
    const action = {
      type: FETCH_BUCKETLIST_SUCCEEDED,
      payload: {data: bucketList},
    };
    const newState = reducer({}, action);
    expect(newState.bucketList).toMatchObject(bucketList);
  });
  it('Add new place succeeded', () => {
    const data = {place: 'cairo', userId: ''};
    const action = {
      type: ADD_NEW_PLACE_SUCCEEDED,
      payload: data,
    };
    const newState = reducer({bucketList: []}, action);
    expect(newState.bucketList[0]).toMatchObject(data);
  });
});
