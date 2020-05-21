import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import './NavBar.scss';

import { sessionService } from '../../../state/session';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <Navbar color="primary">
      <Link to="/">
        <NavbarBrand tag="span">{title}</NavbarBrand>
      </Link>

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
