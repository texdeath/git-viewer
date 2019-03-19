import { Store } from 'redux';
interface SagaStore extends Store {
  runSaga?: any;
  close?: any;
}

export default function monitorSagas(store: SagaStore) {
  const allTasks: any = [];
  const saveRunSaga = store.runSaga;

  store.runSaga = function interceptRunSaga(saga: any) {
    const task = saveRunSaga.call(store, saga);
    allTasks.push(task);
    return task;
  };

  return function done() {
    return Promise.all(allTasks.map((t: any) => t.done));
  };
}
