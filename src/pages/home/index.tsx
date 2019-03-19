import * as React from 'react';
import Userdata from '@containers/viewer/users';
import { Header, Content, Footer, Login } from '@components/common';
import { Container, List } from './style';

const Home = () => (
  <Container>
    <Header title="Github user viewer" subtitle="hello user!" />
    <Content>
      <List>
        <Login label={'Data Fetch'}>
          <Userdata />
        </Login>
        {/* <Login label={'PNG'}>
          <img src={require('@assets/images/logo-reeakt.png')} />
        </Login> */}
      </List>
    </Content>
    <Footer />
  </Container>
);

export default Home;
