import './Event.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const Event = ({ event: { id, name, description, when, location } }) => {
  return (
    <div>
      <h3>{name}</h3>
      <span>{description}</span>
      <span> @ {when}</span>
      <span> - {location}</span>
      <Link to={`/event/${id}`}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};
