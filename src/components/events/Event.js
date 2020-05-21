import React from 'react';
import { Link } from 'react-router-dom';

export const Event = ({ event: { id, name } }) => {
  return (
    <Link to={`/event/${id}`}>
      <p>{name}</p>
    </Link>
  );
};
