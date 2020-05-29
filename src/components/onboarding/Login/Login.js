import './Login.scss';

import React from 'react';
import { Button, Form, FormFeedback, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { sessionService } from 'state/session';

export const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => sessionService.login(data).subscribe();

  return (
    <main className="login">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label for="username">Username</Label>
        <Input
          id="username"
          name="username"
          placeholder="johndoe"
          type="text"
          innerRef={register({ required: 'Please enter your username' })}
          invalid={!!errors.email}
        />
        <FormFeedback>{errors.email?.message}</FormFeedback>

        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          innerRef={register({ required: 'Please enter your password' })}
          invalid={!!errors.password}
        />
        <FormFeedback>{errors.password?.message}</FormFeedback>

        <Button>Login</Button>
        <div>
          <Link to="/register">No account? Sign Up!</Link>
        </div>
      </Form>
    </main>
  );
};
