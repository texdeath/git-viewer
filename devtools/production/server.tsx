import http from 'http';
import path from 'path';
import express from 'express';
import * as React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Html from '@components/core/html';
import Routes, { routesConfig } from '@components/core/routes';
import configureStore from '@services/store';
import monitorSagas from '@services/monitor-sagas';

const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8081;

interface SagaStore extends Store {
  runSaga?: any;
  close?: any;
}

app.use(express.static(path.join(__dirname, '../', '../', 'dist')));
const server = new http.Server(app);

interface ContextType {
  url?: string;
}

app.use((req, res) => {
  const store: SagaStore = configureStore({});
  const context: ContextType = {};
  const component = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {Routes(routesConfig)}
      </StaticRouter>
    </Provider>
  );

  const sagasDone = monitorSagas(store);

  sagasDone().then(() => {
    if (context.url) {
      res.redirect(302, context.url);
      return;
    }

    res.set('content-type', 'text/html');
    res.send(
      `<!doctype html>${renderToStaticMarkup(<Html component={component} store={store} />)}`
    );
    res.end();
  });

  renderToString(component);

  store.close();
});

if (port) {
  server.listen(port, (err: string) => {
    if (err) {
      console.error(`ERROR: ${err}`);
    }

    if (process.env.NODE_ENV === 'production') {
      console.info(
        `Server Bootstrap Successful! Open http://${host}:${port} to see the Production Environment`
      );
    }
  });
} else {
  console.error('ERROR: No PORT environment variable has been specified');
}
