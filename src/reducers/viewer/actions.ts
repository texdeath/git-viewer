import {
  REQUEST_GET_USERS,
  SUCCESS_GET_USERS,
  FAILURE_GET_USERS } from '@reducers/viewer/types';

export const getUsers = () => {
  return {
    type: REQUEST_GET_USERS
  };
};

export const successGetUsers = (users: any) => {
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

