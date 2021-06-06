import React from "react";
import { Route, useHistory } from "react-router-dom";


const UnauthorizedRoute = ({ component: Component, ...props }) => {
  const history = useHistory()
  return (
    <Route>
      {() =>
        props.loggedIn ? history.goBack()/*<Redirect to="/"/>*/ : <Component {...props} />
      }
    </Route>
  );
};

export default UnauthorizedRoute;
