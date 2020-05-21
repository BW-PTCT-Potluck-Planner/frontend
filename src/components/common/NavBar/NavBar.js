import React from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import './NavBar.scss';

import { sessionService } from '../../../state/session';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <Navbar>
      <NavbarBrand href="/">{title}</NavbarBrand>

      <div className="spacer"></div>
      {loggedIn && (
        <aside className="actions">
          <Button className="logout" color="link" onClick={() => sessionService.logout()}>
            Logout
          </Button>
        </aside>
      )}
    </Navbar>
  );
};
