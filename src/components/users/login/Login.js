import React from 'react'
import './login.css';
import {Link} from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import GoogleButton from "react-google-button"


const Login = () => {
  return (
    <>
    <div className='p-4 box'>
      <h2 className='mb-3'> Firebase Auth Login </h2>

   
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <div className='d-grid gap-2'>
      <Button variant="primary" type="submit">
       Log In
      </Button>
      </div>
    </Form>
    <hr />
    <div>
    <GoogleButton className='g-btn' type='dark' />
    </div>
    </div>

    <div className='p-4 box mt-3 text-center'>
      Don't have a account? <Link to="/signup"> Sign Up </Link>
    </div>

    
    </>
  )
}

export default Login