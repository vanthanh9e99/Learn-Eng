import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import * as types from '../actionTypes';
//Saga effects
import {call, delay, put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

GoogleSignin.configure({
  webClientId:
    '467490583669-iteuotc5f93lu894ubn6g0n3injiqvgr.apps.googleusercontent.com',
});

function* login({data}) {
  yield put({
    type: types.LOGIN_USER_LOADING,
  });
  // LOGIN FACEBOOK
  // LOGIN FACEBOOK
  // LOGIN FACEBOOK
  if (data.type == 'facebook') {
    const result = yield LoginManager.logInWithPermissions(['public_profile']);
    if (result.isCancelled) {
      LoginManager.logOut();
      yield put({
        type: types.CANCEL_LOGIN,
      });
    } else {
      const data = yield AccessToken.getCurrentAccessToken();
      if (!data) {
        Alert.alert('Thất bại', 'Vui lòng thử lại');
        LoginManager.logOut();
        yield put({
          type: types.LOGIN_USER_FAILED,
        });
      } else {
        const data1 = yield call(Api.getUserInformation_Facebook, data);
        if (data1.status) {
          AsyncStorage.setItem('loginReducer', JSON.stringify(data1.data));
          yield put({
            type: types.LOGIN_USER_SUCCEED,
            data: data1.data,
          });
        } else {
          Alert.alert('Thất bại', 'Vui lòng thử lại');
          LoginManager.logOut();
          yield put({
            type: types.LOGIN_USER_FAILED,
          });
        }
      }
    }
  } // LOGIN GOOGLE
  // LOGIN GOOGLE
  // LOGIN GOOGLE
  else if (data.type == 'google') {
    try {
      yield GoogleSignin.hasPlayServices();
      const userInfo = yield GoogleSignin.signIn();
      AsyncStorage.setItem(
        'loginReducer',
        JSON.stringify({
          id: userInfo.user.email,
          username: userInfo.user.name,
          avatar: userInfo.user.photo,
        }),
      );
      yield put({
        type: types.LOGIN_USER_SUCCEED,
        data: {
          id: userInfo.user.email,
          username: userInfo.user.name,
          avatar: userInfo.user.photo,
        },
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        yield GoogleSignin.signOut();
      } else if (error.code === statusCodes.IN_PROGRESS) {
        yield GoogleSignin.signOut();
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(
          'Thất bại',
          'Vui lòng kiểm tra lại dịch vụ google trên điện thoại',
        );
      } else {
        Alert.alert('Thất bại', 'Vui lòng thử lại');
        yield GoogleSignin.signOut();
      }
    }
  }
}
export function* watchLogin() {
  yield takeLatest(types.LOGIN_USER, login);
}
