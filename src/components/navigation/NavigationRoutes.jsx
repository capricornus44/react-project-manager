import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

const NavigationRoutes = () => {
  const isAuth = false;

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Switch>
        {mainRoutes.map(route =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
