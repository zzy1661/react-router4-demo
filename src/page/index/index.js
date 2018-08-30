import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Link } from "react-router-dom";
import './index.css';
import Technology from '../technology';
import Book from '../book';
import Author from '../author';
const topics = {
  technology: Technology,
  book: Book,
  author: Author
}
class Index extends Component {

  render() {
    
    return (
      <Router>
      <div className="index">
      	<header>
	        <nav className="nav">
				   		<Link to={`${this.props.match.url}/technology`}>technology</Link>
				   		<Link to={`${this.props.match.url}/book`}>book</Link>
				   		<Link to={`${this.props.match.url}/author`}>author</Link>
	        </nav>
        </header>
        <Route path={`${this.props.match.url}/:topic`} 
          render={({match})=>{
              var Comp = topics[match.params.topic];
              return <Comp/>
            }
          }
        />
        <Route
          exact
          path={this.props.match.url}
          render={() =>  (<article>this is index page</article>)}
        />
       
      </div>
      </Router>
    );
  }
}

export default Index;
