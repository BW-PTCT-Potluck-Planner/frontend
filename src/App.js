import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { useSessionFacade } from 'hooks';
import { NavBar, PublicRoute, PrivateRoute } from 'components/common';
import { Events, EventDetails, EventEdit } from 'components/events';
import { Login, Register } from 'components/onboarding';
import { GuestInvite } from 'components/guests';

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
          <PrivateRoute exact path="/event/:id/rsvp" to="/login" component ={GuestInvite}/>


          <PublicRoute exact path="/login" to="/" component={Login} />
          <PublicRoute exact path="/register" to="/" component={Register} />

          <Redirect to="/" />
        </Switch>
        {/* <GuestInvite/> */}
      </Router>
    </>
  );
};
