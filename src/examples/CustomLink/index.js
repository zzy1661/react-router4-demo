import React from "react";
import { Link, Route } from "react-router-dom";
import './index.css';
const RouterLink = ({ label, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <div className={"router-link "+ (match ? "active" : "")}>
        {match ? <span> > </span> : <span> </span>}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

export default RouterLink;