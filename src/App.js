import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";	
import './App.css';
import Basic from './examples/Basic';
import Params from './examples/Params';
import Auth from './examples/Auth';
class App extends Component {
  render() {
    return (
    	
      <div className="App">
	      <Router>
				    <div>
				      <ul>
				        <li>
				          <Link to="/basic">basic</Link>
				        </li>
				        <li>
				          <Link to="/params">url params</Link>
				        </li>
				        <li>
				          <Link to="/auth">Redirects (Auth)</Link>
				        </li>
				      </ul>
				
				      <hr />
				      <Switch>
					      <Route exact path="/" render={ ()=> ( <Redirect to="/basic" />)} />
					      <Route path="/basic" component={Basic} />
					      <Route path="/params" component={Params} />
					      <Route path="/auth" component={Auth} />
				      </Switch>
							
				    </div>
				  </Router>
        
      </div>
    );
  }
}

export default App;
