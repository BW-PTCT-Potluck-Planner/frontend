import './NavBar.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

import { sessionService } from 'state';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <Navbar color="primary">
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
