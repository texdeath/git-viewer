import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import Reducers from '@reducers/index';
import Sagas from '@sagas/index';

interface SagaStore extends Store {
  runSaga?: any;
  close?: any;
}

function enableHMR(store: SagaStore) {
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('@reducers/index', () => {
      const nextReducer = require('@reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }
}

export default (initialState: object): Store => {
  const ReduxSagaMiddleware = createSagaMiddleware();
  const store: SagaStore = createStore(
    Reducers,
    initialState,
    compose(
      applyMiddleware(ReduxSagaMiddleware),
      process.env.NODE_ENV === 'development' &&
        typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )
  );

  store.runSaga = ReduxSagaMiddleware.run;
  store.runSaga(Sagas);
  store.close = () => store.dispatch(END);

  enableHMR(store);
  return store;
};
