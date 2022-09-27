
import React, { useState } from "react";
import { useState } from "react";
import './signup.css'
import {Link} from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import GoogleButton from "react-google-button"
import { useUserAuth } from "../../../context/UserAuthContext";
import { async } from "@firebase/util";

const SignUp = () => {

  const[email, setEmail] = useState("");
  const[passwore, setPassword] = useState("")
  const {SignUp} = useUserAuth;
  const [error, setError] = useState("")
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError("");
    try{
     await SignUp(email,password)
    }catch(err) {
    setError.apply(err.message);
    }
  }
  return (
    <>
    <div className='p-4 box'>
      <h2 className='mb-3'> Firebase Auth sign Up </h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
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
      Don't have a account? <Link to="/login"> Log In </Link>
    </div>

    
    </>
    </>
  )
}

export default SignUp;