import './Guests.scss';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import React from 'react';


  function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }
export const Guests = ({ guest: { id, name } }) => {
  
  return (
    <>
      <h3>
        <ul>{name}</ul>
        <Link>
          <Button onClick = {handleClick}>Remove</Button>
        </Link>
      </h3>
    </>
  );
};
