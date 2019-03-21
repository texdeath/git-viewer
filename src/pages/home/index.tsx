import * as React from 'react';
import UsersList from '@containers/viewer/users';
import { Article } from '@components/common';
import { Container, List } from './style';

const Home = () => (
  <Container>
    <List>
      <Article label={'Github Users'}>
        <UsersList />
      </Article>
    </List>
  </Container>
);

export default Home;
