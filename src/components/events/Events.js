import React from 'react';

import { useEventsFacade } from '../../hooks';
import { Event } from './Event';

export const Events = () => {
  const [{ events }] = useEventsFacade();

  return (
    <>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </>
  );
};
