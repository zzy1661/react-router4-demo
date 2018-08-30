import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ParamsExample = ({ match }) => (
  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
        <li>
          <Link to={`${match.url}/netflix`}>Netflix</Link>
        </li>
        <li>
          <Link to={`${match.url}/zillow-group`}>Zillow Group</Link>
        </li>
        <li>
          <Link to={`${match.url}/yahoo`}>Yahoo</Link>
        </li>
        <li>
          <Link to={`${match.url}/modus-create`}>Modus Create</Link>
        </li>
        <li>
          <Link to={`${match.url}/order`}>order</Link>
        </li>
        <li>
          <Link to={`${match.url}/order/asc`}>order asc</Link>
        </li>
        <li>
          <Link to={`${match.url}/order/desc`}>order desc</Link>
        </li>
        <li>
          <Link to={`${match.url}/order/foo`}>order foo</Link>
        </li>
      </ul>

      <Route exact path={`${match.url}/:id`} component={Child} />

      {/*
         	正则
            * "/order/asc"  - matched
            * "/order/desc" - matched
            * "/order/foo"  - not matched
      */}
      <Route
        path={`${match.url}/order/:direction(asc|desc)`} exact
        component={ComponentWithRegex}
      />
    </div>
  </Router>
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
  <h3>ID: {match.params.id}</h3>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default ParamsExample;