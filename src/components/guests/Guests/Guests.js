import './Guests.scss';
import { Guest } from '../Guest/Guest';
import React from 'react';
import { useGuestFacade } from 'hooks';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Guests = () => {
  const id = '0';
  const [{ guests }] = useGuestFacade(id);
  console.log(guests);
  return (
    <>
      {guests.map((guest) => (
        <Guest key={guest.id} guest={guest} eventID={id} />
      ))}
      <Link to={`/event/${id}/invite`}>
        <Button>Add</Button>
      </Link>
    </>
  );
};
