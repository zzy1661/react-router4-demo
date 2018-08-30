import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Topics from './Topics';
class BasicExample extends Component{ 
	render()  {
		return (
	
				<div>
					<ul>
						<li>
							<Link to={`${this.props.match.url}`}>Home</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/about`}>About</Link>
						</li>
						<li>
							<Link to={`${this.props.match.url}/topics`}>Topics</Link>
						</li>
					</ul>
		
					<hr />
		
					<Route exact path={`${this.props.match.url}`} component={Home} />
					<Route path={`${this.props.match.url}/about`} component={About} />
					<Route path={`${this.props.match.url}/topics`} component={Topics} />
				</div>
		
		)
	  
	}
}



export default BasicExample;