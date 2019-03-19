interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __INITIAL_STATE__: object;
}

interface NodeModule {
  hot: {
    accept(path?: string, callback?: () => void): void;
  };
}
