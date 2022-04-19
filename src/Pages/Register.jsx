import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GoogleAuthProvider } from "firebase/auth";
import {Button ,Form} from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import PageTitle from '../Components/PageTitle';







const Container = styled.div``;
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:30px 0px;
`;
const Input = styled.input`
  display:block;
  width:350px;
  padding:12px;
  border-radius:12px;
  margin:10px 0px;
  
`;
const Formdiv = styled.form`
  margin:40px 0px;
`;
const RegButton = styled.button`
  padding:10px 30px;
  background-color:tomato;
  border-radius:12px;
  border:none;
  display:block;
  color:white;
`;

const Hr = styled.hr`
  width:180px;

  padding:3px;
  color:balck;
`

const Text = styled.span``;

const Register = () => {


  const navigate = useNavigate()
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

  const [
  createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth); 

   if(user){
     console.log(user)
   }

   const nameref = useRef(" ");
   const emailref = useRef(" ");
   const passref = useRef(" ");


   if(user){
     navigate("/");

   }
   const handleSubmit = (e) => {

     e.preventDefault();
     const Name = nameref.current.value;
     const email = emailref.current.value;
     const password = passref.current.value;

     console.log(email);
     console.log(password);


     createUserWithEmailAndPassword(email,password);



   }

  
    return (
        <Container>
          <PageTitle title="Register"></PageTitle>
            
            <Wrapper>
                 <Button className="text-white" style={{color:"white", margin:"20px 0px"}} onClick={() => signInWithGoogle()}><i className="fa-brands fa-google" style={{marginRight:"5px",fontSize:"18px"}}></i>Google Sign In</Button>
                  <Button className="text-white" style={{color:"white", margin:"10px 0px",background:"black",borderColor:"black"}}
                   onClick={() => signInWithGithub()}
                  ><i className="fa-brands fa-github" style={{marginRight:"5px",fontSize:"18px"}}></i>Github Sign In</Button>
                <Hr/>
                <Formdiv onSubmit={handleSubmit}> 
                    <Input placeholder="Enter your Name" type="name" ref={nameref} />
                     <Input placeholder="Enter your Email" type="email" ref={emailref} required/>
                      <Input placeholder="Enter your Password" type="password" ref={passref} required/>
                      <RegButton type="submit">Register</RegButton>
                      <Text>Already Registered?<Link to="/login" className='link'>Please Login</Link></Text>
                </Formdiv>
            </Wrapper>







            {/* <Form className='w-50 mx-auto' style={{background : "whitesmoke",padding:"30px",
            marginBottom : "30px"
          }}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form> */}
            
        </Container>
    );
};

export default Register;