import {delay, put} from 'redux-saga/effects';
import {getUsersRSuccess} from '../actions/actions';
import {Api} from './../../API/api';
import {getUserFail} from './../actions/actions';

export function* getUsersSaga() {
  try {
    let response = yield Api.getUsers();
   
    if (response.data) {
    console.log('fff')
      yield put(getUsersRSuccess(response.data.users));
    }
  } catch (err) {
    console.log(err);
    yield put(getUserFail(err?.response?.data?.message));
  }
}
