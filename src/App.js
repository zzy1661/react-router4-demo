import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from './page/login';
import Index from './page/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
			    <Switch>			     
			      <Route exact path="/login" component={Login} />
			      <Route exact path="/index" component={Index} />
			      <Redirect to="/login" />
			    </Switch>
			  </Router>
      </div>
    );
  }
}

export default App;
