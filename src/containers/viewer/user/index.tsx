import * as React from 'react';
import { connect } from 'react-redux';
import { getUser, getUserRepos } from '@reducers/viewer/actions';
import {
  Card,
  Content,
  User,
  UserName,
  Avater,
  Sub,
  SubDesc,
  SubDescHeader,
  SubDescText,
  RepoName,
  RepoLang,
  RepoHeader,
  RepoStar,
  RepoDesc,
  BackButton,
  RepoLink
} from './style';
import { withRouter, RouteComponentProps } from 'react-router-dom';

/**
 * FIXME: React-routerでURLパスやクエリ等を使用するため、RouteComponentPropsをextendsして
 * 宣言ファイルから型定義を行うと、RouteComponentPropsが取れず型定義ファイルが読み込めなくなる。
 * importが解釈できていないようだったので、暫定的にコンポーネントに直書きしている
 */
interface UserDataProps extends RouteComponentProps<{ id: string }> {
  viewer?: object | [];
  getUser?: Function;
  getUserRepos?: Function;
  user?: any;
  repos?: Array<object>;
  isUserLoading: boolean;
  isRepoLoading: boolean;
}

class UserRepo extends React.Component<UserDataProps, {}> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const { getUser, getUserRepos } = this.props;
    getUser(id);
    getUserRepos(id);
  }

  render() {
    const { user, repos, isUserLoading, isRepoLoading } = this.props;
    const { avatar_url, name, followers, following } = user;
    if (isUserLoading || isRepoLoading) {
      return <p>Loading...</p>
    }
    return (
      <React.Fragment>
        <User>
          <Avater src={avatar_url} alt={name} />
          <Content>
            <UserName>{name}</UserName>
            <Sub>
              <SubDesc>
                <SubDescHeader>Followr: </SubDescHeader>
                <SubDescText>{followers}</SubDescText>
              </SubDesc>
              <SubDesc>
                <SubDescHeader>Following: </SubDescHeader>
                <SubDescText>{following}</SubDescText>
              </SubDesc>
            </Sub>
          </Content>
        </User>

        <BackButton to='/'>Back</BackButton>
        {
          repos.map((repo: any) => {
            const { id, name, language, stargazers_count, description, html_url } = repo;
            return (
              <RepoLink key={id} href={html_url} target='_blank'>
                <Card>
                  <RepoHeader>
                    <RepoStar>Star: {stargazers_count}</RepoStar>
                    <RepoName>{name}</RepoName>
                    <RepoLang>{language}</RepoLang>
                  </RepoHeader>
                  <RepoDesc>{description}</RepoDesc>
                </Card>
              </RepoLink>

            )
          })
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.viewer.user,
    repos: state.viewer.repos,
    isUserLoading: state.viewer.isUserLoading,
    isRepoLoading: state.viewer.isRepoLoading,
  };
};

export default withRouter<any>(connect(
  mapStateToProps,
  { getUser, getUserRepos }
)(UserRepo));
