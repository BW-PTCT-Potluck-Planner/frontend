import './NavBar.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Button, Form } from 'reactstrap';

import { sessionService } from 'state';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <Navbar color="primary" dark>
      <NavbarBrand href="/">{title}</NavbarBrand>

      {loggedIn && (
        <Form inline>
          <Button onClick={() => sessionService.logout()}>
            Logout
          </Button>
        </Form>
      )}
    </Navbar>
  );
};
