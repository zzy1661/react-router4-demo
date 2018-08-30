import React from "react";
const NoMatch = ({ location }) => (
  <div>
  	<h1>404</h1>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);
export default NoMatch;
