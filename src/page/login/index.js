import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import logo from '../../logo.svg';

class Login extends Component {
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
