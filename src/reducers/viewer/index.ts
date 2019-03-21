import { createActions } from '@reducers/index';
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

interface InitialState {
  isListLoading: boolean;
  isUserLoading: boolean;
  isRepoLoading: boolean;
  error: any;
  users: Array<object>;
  user: object;
  repos: Array<object>;
}

export const initialState: InitialState = {
  isListLoading: false,
  isUserLoading: false,
  isRepoLoading: false,
  error: null,
  users: [],
  user: {},
  repos: [],
};

export default (state = initialState, action: any) => {
  return createActions(
    { state, action },
    {
      [REQUEST_GET_USERS]: () => ({ ...state, isListLoading: true }),
      [SUCCESS_GET_USERS]: () => ({ ...state, isListLoading: false, users: action.payload.users.data }),
      [FAILURE_GET_USERS]: () => ({ ...state, isListLoading: false, error: action.payload.error }),
      [REQUEST_GET_USER]: () => ({ ...state, isUserLoading: true }),
      [SUCCESS_GET_USER]: () => ({ ...state, isUserLoading: false, user: action.payload.user.data }),
      [FAILURE_GET_USER]: () => ({ ...state, isUserLoading: false, error: action.payload.error }),
      [REQUEST_GET_USER_REPOS]: () => ({ ...state, isRepoLoading: true }),
      [SUCCESS_GET_USER_REPOS]: () => ({ ...state, isRepoLoading: false, repos: action.payload.filteredRepos }),
      [FAILURE_GET_USER_REPOS]: () => ({ ...state, isRepoLoading: false, error: action.payload.error })
    }
  );
};
