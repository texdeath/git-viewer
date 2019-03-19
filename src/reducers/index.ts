import { combineReducers } from 'redux';
import viewerReducer from '@reducers/viewer';

export const createActions = ({ state, action }: any, actions: any) => {
  const cases = actions[action.type];
  return cases ? cases() : state;
};

const rootReducer = combineReducers({
  viewer: viewerReducer,
});

export default rootReducer;
