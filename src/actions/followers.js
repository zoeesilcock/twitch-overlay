import * as types from '../constants/ActionTypes';

export function addFollower(name) {
  return { type: types.ADD_FOLLOWER, name };
}

export function removeFollower(name) {
  return { type: types.REMOVE_FOLLOWER, name };
}
