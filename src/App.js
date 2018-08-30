import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";	
import './App.css';
import Basic from './examples/Basic';
import Params from './examples/Params';
import Auth from './examples/Auth';
import RouterLink from './examples/CustomLink';
class App extends Component {
  render() {
    return (
    	
      <div className="App">
	      <Router>
				    <div>
				      <ul className="nav">
				        <li>
				          <RouterLink to="/basic" exact={true} label="basic"></RouterLink>
				        </li>
				        <li>
				          <RouterLink to="/params" exact={true} label="url params"></RouterLink>
				        </li>
				        <li>
				          <RouterLink to="/auth" exact={true} label="Redirects (Auth)">Redirects (Auth)</RouterLink>
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
