import {all, takeEvery} from 'redux-saga/effects';
import es6promise from 'es6-promise';

import * as actionTypes from '../actions/actionTypes';

import { getUsersSaga } from './appSaga';

es6promise.polyfill();

function* rootSaga() {
  yield all([
    takeEvery(actionTypes.GET_USERS_REQUEST, getUsersSaga),
  

  ]);
}

export default rootSaga;
