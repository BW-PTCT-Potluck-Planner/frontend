import './Guest.scss';
import { Button } from 'reactstrap';
import React from 'react';
import { userService } from '../../../state';

export const Guest = ({ guest: { id, name }, eventID }) => {
  return (
    <>
      <h3>
        <ul>{name}</ul>
        <Button onClick={() => userService.uninviteUser(id, eventID)}>Remove</Button>
      </h3>
    </>
  );
};
