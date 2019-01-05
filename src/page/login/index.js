import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import logo from '../../logo.svg';

class Login extends Component {
  componentDidMount() {

    var session = sessionStorage.getItem('user');
    if(session) {
      this.props.history.push('/index')
    }else {
      sessionStorage.setItem('user','user');
    }
     
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} className="login-logo" alt="logo" />
          <h1 className="login-title">Welcome to React</h1>
        </header>
        <p className="login-intro">
          login
        </p>
      </div>
    );
  }
}

export default Login;
