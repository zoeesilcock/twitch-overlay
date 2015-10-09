import { ADD_FOLLOWER } from '../constants/ActionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_FOLLOWER:
      return [{ name: action.name }, ...state];
    default:
      return state;
  }
}
