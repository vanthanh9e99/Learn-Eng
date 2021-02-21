import * as types from './actionTypes';
//Login
export function login(data) {
  return {
    type: types.LOGIN_USER,
    data,
  };
}
export function saveFromAsync(data) {
  return {
    type: types.SAVE_USER_INFO_ASYNC,
    data,
  };
}
