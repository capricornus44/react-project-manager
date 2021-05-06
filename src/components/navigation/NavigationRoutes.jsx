import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import Spinner from '../spinner/Spinner';

const NavigationRoutes = () => {
  const isAuth = true;

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {mainRoutes.map(route =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          ),
        )}
        <Redirect to="/signup" />
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
