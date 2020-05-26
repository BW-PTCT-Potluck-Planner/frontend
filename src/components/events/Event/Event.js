import './Event.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({ event: { id, title, date, time, location} }) => {
  return (
  
    <Link to={`/event/${id}`}>
      <div>
      <h3>{title}</h3>
      <span>{date}</span>
      <span> @ {time}</span>
      <span> - {location}</span>
      <button>Deatils</button>
      </div>
    </Link>
   
  );
};
