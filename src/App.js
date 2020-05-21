import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import { useSessionFacade } from './hooks';
import { NavBar } from './components/common/NavBar/NavBar';

const App = () => {
  const [{ token }] = useSessionFacade();

  return (
    <>
      <Router>
        <NavBar title="Potluck Planner" user={!!token} />
      </Router>
    </>
  );
};

export default App;
