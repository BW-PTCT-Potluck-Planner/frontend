import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useSessionFacade } from './hooks';

import { NavBar } from './components/common/NavBar/NavBar';
import { PublicRoute } from './components/common/PublicRoute';
import { PrivateRoute } from './components/common/PrivateRoute';

import { Events } from './components/events/Events';
import { EventDetails } from './components/events/EventDetails';
import { EventEdit } from './components/events/EventEdit';

import { Login } from './components/onboarding/Login/Login';
import { Register } from './components/onboarding/Register/Register';

export const App = () => {
  const [{ token }] = useSessionFacade();

  return (
    <>
      <Router>
        <NavBar title="Potluck Planner" loggedIn={!!token} />
        <Switch>
          <PrivateRoute exact path="/" to="/login" component={Events} />
          <PrivateRoute exact path="/event/create" to="/login" component={EventEdit} />
          <PrivateRoute exact path="/event/:id" to="/login" component={EventDetails} />
          <PrivateRoute exact path="/event/:id/edit" to="/login" component={EventEdit} />

          <PublicRoute exact path="/login" to="/" component={Login} />
          <PublicRoute exact path="/register" to="/" component={Register} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};
