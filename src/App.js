import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';

import { useSessionFacade } from './hooks';

import { NavBar } from './components/common/NavBar/NavBar';
import { PublicRoute } from './components/common/PublicRoute';
import { PrivateRoute } from './components/common/PrivateRoute';

import { Events } from './components/events/Events';
import { Login } from './components/onboarding/Login';

const App = () => {
  const [{ token }] = useSessionFacade();

  return (
    <>
      <Router>
        <NavBar title="Potluck Planner" loggedIn={!!token} />
        <Switch>
          <PrivateRoute exact path="/" to="/login" component={Events} />
          <PublicRoute exact path="/login" to="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
