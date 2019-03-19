import { takeEvery, all } from 'redux-saga/effects';
import { REQUEST_GET_USERS } from '@reducers/viewer/types';
import { getUserList } from '@sagas/viewer';

export default function* rootSaga() {
  yield all([
    takeEvery(REQUEST_GET_USERS, getUserList)
  ]);
}
