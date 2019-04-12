import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuthConsumer } from "../contexts/AuthStore";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  user,
  role,
  ...rest
}) => {
  console.log(rest);
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }
  if (role && role !== user.role) {
    return <Redirect to="/forbidden" />;
  }
  return <Route {...rest} component={Component} />;
};

export default withAuthConsumer(PrivateRoute);
