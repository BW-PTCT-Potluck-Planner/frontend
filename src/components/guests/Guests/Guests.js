import './Guests.scss';

import React from 'react';

export const Guests = ({ guest: {id, name } }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};
