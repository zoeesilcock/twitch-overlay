import * as types from '../constants/ActionTypes';

export function addFollower(name) {
  return { type: types.ADD_FOLLOWER, name };
}
