import * as React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import { ServerStyleSheet } from 'styled-components';

export default (props: HtmlProps) => {
  const head = Helmet.rewind();
  const sheet = new ServerStyleSheet();
  const body = props.component ? renderToString(props.component) : '';
  sheet.collectStyles(body);

  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="github-viewer" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#303F9F" />
        {sheet.getStyleElement()}
      </head>
      <body>
        <div id="root" style={{ height: '100vh' }} dangerouslySetInnerHTML={{ __html: body }} />
        {props.store && (
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__=${serialize(props.store.getState())};`
            }}
            charSet="UTF-8"
          />
        )}
        <script src={'./js/bundle.js'} charSet="UTF-8" />
      </body>
    </html>
  );
};
