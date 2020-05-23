import './Event.scss';

import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({ event: { id, title } }) => {
  return (
    <Link to={`/event/${id}`}>
      <p>{title}</p>
    </Link>
  );
};
