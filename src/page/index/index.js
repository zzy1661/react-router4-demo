import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import './index.css';

class Index extends Component {
  render() {
    return (
      <div className="index">
      	<header>
	        <nav className="nav">
				   		<Link to="/index/technology">technology</Link>
				   		<Link to="/index/book">book</Link>
				   		<Link to="/index/author">author</Link>
	        </nav>
        </header>
        <article>this is index page</article>
      </div>
    );
  }
}

export default Index;
