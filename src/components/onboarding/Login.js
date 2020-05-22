import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';


import { sessionService } from '../../state/session';

export const Login = () => {
  return (
    <main>
    
    <Form>
    <h6>Sign in</h6>

      <Label html for = "email" >Email</Label>
      <Input
       name = "email"
       placeholder = "Email"
       type = "text"
       
      />
      <Label html for = "password">Password</Label>
      <Input
       name ="password"
       placeholder = "Password"
       type = "text"
       
      />
    
    
      <Button onClick={() => sessionService.login()}>Login</Button>
      <div >
      <Link to="/register">No account? Sign Up!</Link>
      </div>
      </Form>
    </main>
  );
};
