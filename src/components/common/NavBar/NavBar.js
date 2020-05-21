import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './NavBar.scss';

export const NavBar = ({ title, loggedIn }) => {
  return (
    <header>
      <Link>
        <span>{title}</span>
      </Link>
      <div className="spacer"></div>
      {loggedIn && (
        <aside className="actions">
          <Button className="logout" color="link">
            Logout
          </Button>
        </aside>
      )}
    </header>
  );
};
