import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './NavBar.scss';

import { sessionService } from '../../../state/session';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <header>
      <Link to="/">
        <span>{title}</span>
      </Link>
      <div className="spacer"></div>
      {loggedIn && (
        <aside className="actions">
          <Button className="logout" color="link" onClick={() => sessionService.logout()}>
            Logout
          </Button>
        </aside>
      )}
    </header>
  );
};
