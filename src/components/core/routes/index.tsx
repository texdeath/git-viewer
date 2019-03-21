import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { GlobalStyle } from './style';

import HomeScreen from '@pages/home';
import UserScreen from '@pages/user';
import NotFoundScreen from '@pages/not-found';

type TParams = { id: string };

export const routesConfig: Array<RoutesType> = [
  { path: '/', exact: true, component: HomeScreen },
  { path: '/user/:id', component: UserScreen },
  { component: NotFoundScreen },
];

export default (routesList: Array<RoutesType>) => {
  const list = routesList ? (
    <React.Fragment>
      <GlobalStyle />
      <Switch>
        {routesList.map((route, i) => (
          <Route
            key={`route-${i}`}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => <route.component {...props} route={route} />}
          />
        ))}
      </Switch>
    </React.Fragment>
  ) : null;
  return list;
};
