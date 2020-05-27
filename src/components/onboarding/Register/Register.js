import './Register.scss';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormFeedback, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

import { sessionService } from 'state';

export const Register = () => {
  const { register, handleSubmit, getValues, errors } = useForm({ mode: 'onBlur' });

  return (
    <main class="register">
      <h6>Create an account</h6>
      <Form onSubmit={handleSubmit((user) => sessionService.register(user))}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            innerRef={register({
              required: 'A email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            invalid={!!errors.email}
          />
          <FormFeedback>{errors.email?.message}</FormFeedback>
          <FormText>ie: example@gmail.com</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            innerRef={register({
              required: 'Username is required',
              validate: async (username) => sessionService.validateUsername(username),
            })}
            invalid={!!errors.username}
          />
          <FormFeedback>{errors.username?.message}</FormFeedback>
          <FormText>Must be unique</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            innerRef={register({
              required: 'Password is required',
              minLength: { message: 'Please enter at least 6 characters', value: 6 },
            })}
            invalid={!!errors.password}
          />
          <FormFeedback>{errors.password?.message}</FormFeedback>
          <FormText>At least 6 characters long</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            innerRef={register({
              required: 'Please confirm your password',
              validate: (confirm) => confirm === getValues().password,
            })}
            invalid={!!errors.confirmPassword}
          />
          <FormFeedback>{errors.confirmPassword?.message}</FormFeedback>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </main>
  );
};
