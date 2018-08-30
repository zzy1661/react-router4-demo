import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Topics from './Topics';
class BasicExample extends Component{ 
	render()  {
		return (
			<Router>
			    <div>
			      <ul>
			        <li>
			          <Link to="/">Home</Link>
			        </li>
			        <li>
			          <Link to="/about">About</Link>
			        </li>
			        <li>
			          <Link to="/topics">Topics</Link>
			        </li>
			      </ul>
			
			      <hr />
			
			      <Route exact path="/" component={Home} />
			      <Route path="/about" component={About} />
			      <Route path="/topics" component={Topics} />
			    </div>
			  </Router>
		)
	  
	}
}



export default BasicExample;