import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";	
import './App.css';
import Basic from './examples/Basic';
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
				        
				      </ul>
				
				      <hr />
				      
							<Route exact path="/" render={ ()=> ( <Redirect to="/basic" />)} />
				      <Route exact path="/basic" component={Basic} />
				      
				    </div>
				  </Router>
        
      </div>
    );
  }
}

export default App;
