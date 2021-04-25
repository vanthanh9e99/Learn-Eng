import * as loginTypes from './actionTypes';

const initialState = {
  //user
  id: -1,
  username: '',
  avatar: ``,
  token: '',
  loadingLogin: false,
  error: false,
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case loginTypes.LOGIN_EMAIL:
      return {
        ...state,
        loadingLogin: false,
        error: false,
        ...action.data,
      };
    case loginTypes.SAVE_USER_INFO_ASYNC:
      return {
        ...state,
        loadingLogin: false,
        error: false,
        ...action.data,
      };
    case loginTypes.LOGIN_USER_LOADING:
      return {
        ...state,
        loadingLogin: true,
        error: false,
      };
    case loginTypes.CANCEL_LOGIN:
      return {
        ...state,
        loadingLogin: false,
        error: false,
      };
    case loginTypes.LOGIN_USER_SUCCEED:
      console.log('reducer');
      return {
        ...state,
        loadingLogin: false,
        error: false,
        ...action.data,
      };
    case loginTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        loadingLogin: false,
        error: true,
      };
    default:
      return state;
  }
}
