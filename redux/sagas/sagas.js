import { getUsersByAPI } from '../../components/API/api';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../actions/types';

function* fetchUsers(){
  try {
    const users = yield call(getUsersByAPI);
    yield put({
      type: types.FETCH_USERS_SUCCEEDED,
      payload: {
        data: users
      }
    })
  } catch (e) {
    console.log(e)
  }
}

export function* rootSaga() {
  yield takeEvery(types.FETCH_USERS, fetchUsers);
}