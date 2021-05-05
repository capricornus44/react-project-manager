import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  isAuth,
  exact,
  path,
  component: Component,
  isRestricted,
}) => {
  return isAuth && isRestricted ? (
    <Redirect to="/project" />
  ) : (
    <Route exact={exact} path={path} component={Component} key={path} />
  );
};

export default PublicRoute;
