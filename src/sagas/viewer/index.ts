import { put, call } from 'redux-saga/effects';
import { successGetUsers, failureGetUsers, successGetUser, failureGetUser, successGetUserRepos, failureGetUserRepos } from '@reducers/viewer/actions';
// import { getUsers, fetchAuth } from '@services/endpoint';
import { fetchPosts } from '@services/endpoint';

const baseUrl = 'https://api.github.com';

// export function* fetchAuth() {
//   try {
//     const fetch = yield fetchPosts(baseUrl);
//     yield put(getGitSuccess(fetch));
//   } catch (error) {
//     yield put(getGitFailure(error));
//   }
// }

export function* getUserList() {
  try {
    const fetch = yield fetchPosts(`${baseUrl}/users`);
    yield put(successGetUsers(fetch));
  } catch (error) {
    yield put(failureGetUsers(error));
  }
}

export function* getUser(action: any) {
  const { payload } = action;
  try {
    const fetch = yield fetchPosts(`${baseUrl}/users/${payload}`);
    yield put(successGetUser(fetch));
  } catch (error) {
    yield put(failureGetUser(error));
  }
}

export function* getUserRepos(action: any) {
  const { payload } = action;
  try {
    const fetch = yield fetchPosts(`${baseUrl}/users/${payload}/repos`);
    console.log(fetch);
    yield put(successGetUserRepos(fetch));
  } catch (error) {
    yield put(failureGetUserRepos(error));
  }
}


