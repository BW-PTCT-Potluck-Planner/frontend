import './Guests.scss';

import React from 'react';

export const Guests = ({ guest: { id, name } }) => {
  return (
    <>
      <h3>
        <ul>{name}</ul>
      </h3>
    </>
  );

};