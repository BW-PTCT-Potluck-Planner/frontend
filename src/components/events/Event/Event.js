import './Event.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({ event: { id, name, description, when, location} }) => {
  return (
  
    <Link to={`/event/${id}`}>
      <div>
      <h3>{name}</h3>
      <span>{description}</span>
      <span> @ {when}</span>
      <span> - {location}</span>
      <button>Deatils</button>
      </div>
    </Link>
   
  );
};
