import {
  REQUEST_GET_USERS,
  SUCCESS_GET_USERS,
  FAILURE_GET_USERS,
  REQUEST_GET_USER,
  SUCCESS_GET_USER,
  FAILURE_GET_USER,
  REQUEST_GET_USER_REPOS,
  SUCCESS_GET_USER_REPOS,
  FAILURE_GET_USER_REPOS
 } from '@reducers/viewer/types';

import { exactForkedRepo } from '@reducers/viewer/selectors';

export const getUsers = () => {
  return {
    type: REQUEST_GET_USERS
  };
};

export const successGetUsers = (users: Array<object>) => {
  return {
    type: SUCCESS_GET_USERS,
    payload: { users }
  };
};

export const failureGetUsers = (error: any) => {
  return {
    type: FAILURE_GET_USERS,
    payload: { error }
  };
};

export const getUser = (id: string) => {
  return {
    type: REQUEST_GET_USER,
    payload: id
  };
};

export const successGetUser = (user: object) => {
  return {
    type: SUCCESS_GET_USER,
    payload: { user }
  };
};

export const failureGetUser = (error: any) => {
  return {
    type: FAILURE_GET_USER,
    payload: { error }
  };
};

export const getUserRepos = (id: string) => {
  return {
    type: REQUEST_GET_USER_REPOS,
    payload: id
  };
};

export const successGetUserRepos = (repos: any) => {
  const filteredRepos = exactForkedRepo(repos.data);
  return {
    type: SUCCESS_GET_USER_REPOS,
    payload: { filteredRepos }
  };
};

export const failureGetUserRepos = (error: any) => {
  return {
    type: FAILURE_GET_USER_REPOS,
    payload: { error }
  };
};
