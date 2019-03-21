import * as React from 'react';
import { Header, Content, Footer } from '@components/common';
import Routes, { routesConfig } from '@components/core/routes';

const Layout = () => (
    <React.Fragment>
        <Header title="Github user viewer" subtitle="hello user!" />
            <Content>
                {Routes(routesConfig)}
            </Content>
        <Footer />
    </React.Fragment>
)

export default Layout;
