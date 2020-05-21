import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { sessionService } from '../../state/session';

export const Login = () => {
  return (
    <>
      <Button onClick={() => sessionService.login()}>Login</Button>
      <Link to="/register">No account? Sign Up!</Link>
    </>
  );
};
