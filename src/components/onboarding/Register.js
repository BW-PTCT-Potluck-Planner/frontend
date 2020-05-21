import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormFeedback, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

import { sessionService } from '../../state/session';

export const Register = () => {
  const { register, handleSubmit, getValues, errors } = useForm({ mode: 'onBlur' });

  return (
    <Form onSubmit={handleSubmit((user) => sessionService.register(user))}>
      <FormGroup>
        <Label for="email" hidden>
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
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
        <Label for="confirmPassword" hidden>
          Username
        </Label>
        <Input
          type="text"
          name="username"
          id="username"
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
        <Label for="password" hidden>
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
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
        <Label for="confirmPassword" hidden>
          Password
        </Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
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
  );
};
