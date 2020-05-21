import React from 'react';

import { useEventsFacade } from '../../hooks';
import { Event } from './Event';

export const Events = () => {
  const [{ events }] = useEventsFacade();
  return (
    <>
      {events.map(({ id, name }) => (
        <Event key={id} name={name} />
      ))}
    </>
  );
};
