import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { sessionService } from './../../state/session';




export const Login = () => {
  
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = data => console.log(data);

  
  return (
    <main>
    
    <Form onSubmit = {handleSubmit(onSubmit)}>
      
      <Label>Email</Label>
      <Input
       name = "email"
       placeholder = "Email"
       type = "text"
       ref = {register({required: true})}
       
      />
      {errors.email && <p>Email is required</p>}
      

      <Label>Password</Label>
      <Input
       name ="password"
       placeholder = "Password"
       type = "password"
       ref = {register({required: true, minLength: 8})}
      />
      {errors.password && <p>Password is required</p>}
    
    
      <button onClick={() => sessionService.login()}>Login</button>
      <div >
      <Link to="/register">No account? Sign Up!</Link>
      </div>
      </Form>
    </main>
  );
};
