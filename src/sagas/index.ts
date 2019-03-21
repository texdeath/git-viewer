import { takeEvery, all } from 'redux-saga/effects';
import { REQUEST_GET_USERS, REQUEST_GET_USER, REQUEST_GET_USER_REPOS } from '@reducers/viewer/types';
import { getUserList, getUser, getUserRepos } from '@sagas/viewer';

export default function* rootSaga() {
  yield all([
    takeEvery(REQUEST_GET_USERS, getUserList),
    takeEvery(REQUEST_GET_USER, getUser),
    takeEvery(REQUEST_GET_USER_REPOS, getUserRepos)
  ]);
}
