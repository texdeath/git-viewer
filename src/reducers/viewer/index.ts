import { createActions } from '@reducers/index';
import { REQUEST_GET_USERS, SUCCESS_GET_USERS, FAILURE_GET_USERS, } from '@reducers/viewer/types';

interface InitialState {
  isLoading: boolean;
  error: any;
  users: Array<object>;
}

export const initialState: InitialState = {
  isLoading: false,
  error: null,
  users: [],
};

export default (state = initialState, action: any) => {
  return createActions(
    { state, action },
    {
      [REQUEST_GET_USERS]: () => ({ ...state, isLoading: true }),
      [SUCCESS_GET_USERS]: () => ({ ...state, isLoading: false, users: action.payload.users.data }),
      [FAILURE_GET_USERS]: () => ({ ...state, isLoading: false, error: action.payload.error })
    }
  );
};
