import { ADD_FOLLOWER, REMOVE_FOLLOWER } from '../constants/ActionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_FOLLOWER:
      return [{ name: action.name }, ...state];
    case REMOVE_FOLLOWER:
      return state.filter(follower =>
        follower.name !== action.name
      );
    default:
      return state;
  }
}
