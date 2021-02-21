import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from './user/login/reducer';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  loginReducer,
});
const sagaMiddleware = createSagaMiddleware();

////// CREATE
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
