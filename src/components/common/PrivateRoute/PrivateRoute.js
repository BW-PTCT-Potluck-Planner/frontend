import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useSessionFacade } from 'hooks';

export const PrivateRoute = ({ component: Component, to, ...rest }) => {
  const [{ token }] = useSessionFacade();

  return <Route {...rest} render={() => (token ? <Component /> : <Redirect to={to} />)} />;
};
