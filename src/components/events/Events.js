import React from './node_modules/react';

import { useEventsFacade } from '../../hooks/events.hook';
import { Event } from './Event';

export const Events = () => {
  const [{ events }] = useEventsFacade();
  return (
    <>
      {events.map(({ name }) => (
        <Event name={name} />
      ))}
    </>
  );
};
