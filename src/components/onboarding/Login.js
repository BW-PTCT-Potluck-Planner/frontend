import React from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { sessionService } from './../../state/session';

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required")
});



export const Login = () => {
  
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const onSubmit = data => console.log(data);

  
  return (
    <main>
    
    <Form onSubmit = {handleSubmit(onSubmit)}>
      
      <Label html for = "email" >Email</Label>
      <Input
       name = "email"
       placeholder = "Email"
       type = "email"
       ref = {register}
       
      />
      {errors.email && <p>{errors.email.message}</p>}
      

      <Label html for = "password">Password</Label>
      <Input
       name ="password"
       placeholder = "Password"
       type = "password"
       ref = {register}
      />
      {errors.email && <p>{errors.email.message}</p>}
    
    
      <Button onClick={() => sessionService.login()}>Login</Button>
      <div >
      <Link to="/register">No account? Sign Up!</Link>
      </div>
      </Form>
    </main>
  );
};
