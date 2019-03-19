import * as React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '@reducers/viewer/actions';
import { List, Card } from './style';

class DataFetch extends React.Component<UsersDataProps, {}> {
  constructor(props: UsersDataProps) {
    super(props)
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, isLoading } = this.props;
    console.log(users);
    if(isLoading) {
      return <p>Loading...</p>
    }
    return (
      <List>
        {
          users.map((user: any) => {
            return (
              <Card key={user.id}>
                <a href={user.html_url}>
                  <img src={user.avatar_url} alt={user.login} />{user.login}
                </a>
              </Card>
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
    isLoading: state.viewer.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(DataFetch);
