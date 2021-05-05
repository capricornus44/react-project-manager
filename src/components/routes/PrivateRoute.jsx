import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuth, exact, path, component: Component }) => {
  return isAuth ? (
    <Route exact={exact} path={path} component={Component} key={path} />
  ) : (
    <Redirect to="/auth/register" />
  );
};

export default PrivateRoute;
