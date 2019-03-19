import express from 'express';
import detect from 'detect-port';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Html from '@components/core/html';

function loadDevServer(port: number) {
  const app = express();
  const host = process.env.HOST || 'localhost';
  const compiler = webpack(webpackConfig(port));
  const serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    compress: false,
    publicPath: 'http://' + host + ':' + port,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
  };

  app.use(webpackDevMiddleware(compiler, serverOptions));
  app.use(webpackHotMiddleware(compiler));
  app.use('*', (req, res) => {
    res.set('content-type', 'text/html');
    res.send(`<!doctype html>${renderToStaticMarkup(<Html />)}`);
    res.end();
  });
  app.listen(port, (err: string) => {
    if (err) console.error(`Error: ${err}`);

    console.info(
      `Server Bootstrap Successful! Open http://${host}:${port} to see the Development Environment`
    );
  });
}

detect(3000, (error: any, port: number) => {
  if (error) throw new Error(error);
  loadDevServer(port);
});
