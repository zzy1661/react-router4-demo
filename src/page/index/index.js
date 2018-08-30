import React, { Component } from 'react';
import { Route,  Link } from "react-router-dom";
import './index.css';
// import Technology from '../technology';
// import Book from '../book';
// import Author from '../author';
// const topics = {
//   technology: Technology,
//   book: Book,
//   author: Author
// }
class Index extends Component {

  render() {
    
    return (
      <div className="index">
      	<header>
	        <nav className="nav">
				   		<Link to={`${this.props.match.url}/technology`}>technology</Link>
				   		<Link to={`${this.props.match.url}/book`}>book</Link>
				   		<Link to={`${this.props.match.url}/author`}>author</Link>
	        </nav>
        </header>
        <Route path={`${this.props.match.url}/author`} 
          component={Topic}
        />
        <Route
          exact
          path={this.props.match.url}
          render={() =>  (<article>this is index page</article>)}
        />
        {/* <Router>
          <Switch>
            <Route path="/index" exact></Route>
            <Route path="/index/technology" component={Technology}></Route>
            <Route path="/index/book" component={Book}></Route>
            <Route path="/index/author" component={Author}></Route>
          </Switch> 
        </Router>
        <article>this is index page</article> */}
      </div>
    );
  }
}
const Topic = ({ match }) => (
  <div>
    <h3>sss{match.params.topicId}</h3>
  </div>
);
export default Index;
