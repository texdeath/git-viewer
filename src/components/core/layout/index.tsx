import * as React from 'react';
import Routes, { routesConfig } from '@components/core/routes';

const Layout = () => <React.Fragment>{Routes(routesConfig)}</React.Fragment>;

export default Layout;
