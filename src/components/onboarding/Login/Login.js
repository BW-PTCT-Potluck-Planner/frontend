import './Login.scss';

import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { sessionService } from '../../../state/session';

export const Login = () => {
  // Use react-form-hook to keep things simple
  // Examples are in `Register` and `EventEdit`

  return (
    <>
      {/* Your reactstrap components here */}
      {/* Replace onClick with onSubmit once you have the form built */}
      <Button onClick={() => sessionService.login({})}>Login</Button>
      <Link to="/register">No account? Sign Up!</Link>
    </>
  );
};
