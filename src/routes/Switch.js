import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../services/history";
// import Route from "./Route";

import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/404";

import Home from "../pages/home";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <Route path="/home" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
