import './GuestInvite.scss';
import { Guests } from '../Guests/Guests';
import React from 'react';
import { useGuestFacade } from 'hooks';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const GuestInvite = () => {
  const [{ guests }] = useGuestFacade(0);
  console.log(guests);
  return (
    <>
      {guests.map((guest) => (
        <Guests guest={guest} />
      ))}
      <Link>
        <Button>Add</Button>
      </Link>
    </>
  );
};
