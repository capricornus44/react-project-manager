import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import Spinner from '../spinner/Spinner';
import { isAuthSelector } from '../../redux/auth/authSelectors';

const NavigationRoutes = () => {
  const isAuth = useSelector(isAuthSelector);

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
