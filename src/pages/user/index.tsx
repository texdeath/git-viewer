import * as React from 'react';
import { Article } from '@components/common';
import { Container, List } from './style';
import UserRepo from '@containers/viewer/user';

class User extends React.Component<{}, {}> {
  render() {
    return (
      <Container>
      <List>
        <Article label={'Users Repo'}>
          <UserRepo />
        </Article>
      </List>
    </Container>
      );
  }
}

export default User;
