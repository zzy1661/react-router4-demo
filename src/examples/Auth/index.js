import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


const AuthExample = ({match}) => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to={`${match.url}/public`}>Public Page</Link>
        </li>
        <li>
          <Link to={`${match.url}/protected`}>Protected Page</Link>
        </li>
      </ul>
      <Route path={`${match.url}/public`} component={Public} />
      <Route path={`${match.url}/login`} component={Login} />
      <PrivateRoute path={`${match.url}/protected`} data="bressanone" component={Protected} />
    </div>
  </Router>
);
//控制登入登出，保存登陆信息
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // 模拟异步
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
//withRouter 提供了history
const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        	您已登陆!
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/auth"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>当前状态尚未登陆,更多信息可在登陆后查看!</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/auth/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => <h3>不登陆也能看到的页面</h3>;
const Protected = () => <h3>这是登陆才能看到信息</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>登陆查看等多信息 {from.pathname}</p>
        <button onClick={this.login}>登陆</button>
      </div>
    );
  }
}

export default AuthExample;