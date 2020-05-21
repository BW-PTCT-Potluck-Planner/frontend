import React from 'react';

import { useEventsFacade } from '../../hooks';
import { Event } from './Event';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Events = () => {
  const [{ events }] = useEventsFacade();

  return (
    <>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
      <Link to="/event/create">
        <Button>Create</Button>
      </Link>
    </>
  );
};
