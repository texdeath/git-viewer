import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '@reducers/viewer/actions';
import { List, Card, Avater, UserName } from './style';

class UsersList extends React.Component<UsersDataProps, {}> {
  constructor(props: UsersDataProps) {
    super(props)
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { users, isListLoading } = this.props;
    if(isListLoading) {
      return <p>Loading...</p>
    }
    return (
      <List>
        {
          users.map((user: any) => {
            const { id, login, avatar_url } = user;
            return (
              <Link to={`/user/${login}`} style={{ margin :'8px'}} key={id}>
              <Card>
                  <UserName>{login}</UserName>
                  <Avater src={avatar_url} alt={login} />
              </Card>
              </Link>
            )
          })
        }
      </List>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    users: state.viewer.users,
    isListLoading: state.viewer.isListLoading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(UsersList);
