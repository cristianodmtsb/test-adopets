import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "../services/history";
import { isAuthenticated } from "../services/auth";

import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/404";

import Home from "../pages/home";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <PrivateRoute path="/home" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
