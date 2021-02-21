//Saga effects
import {call, all, fork} from 'redux-saga/effects';
import {watchLogin} from './user/login/saga';

export default function* rootSaga() {
  yield all([watchLogin()]);
}
