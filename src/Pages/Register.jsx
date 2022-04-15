import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import { GoogleAuthProvider } from "firebase/auth";
import {Button } from 'react-bootstrap'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';




const Googleprovider = new GoogleAuthProvider();



const Container = styled.div``;
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
const Input = styled.input`
  display:block;
  width:350px;
  padding:12px;
  border-radius:12px;
  margin:10px 0px;
  
`;
const Form = styled.form`
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
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   if(user){
     console.log(user)
   }

  
    return (
        <Container>
            <Navbar/>
            <Wrapper>
                 <Button className="text-white" style={{color:"white", margin:"20px 0px"}} onClick={() => signInWithGoogle()}><i className="fa-brands fa-google" style={{marginRight:"5px",fontSize:"18px"}}></i>Google Sign In</Button>
                  <Button className="text-white" style={{color:"white", margin:"10px 0px",background:"black",borderColor:"black"}}><i className="fa-brands fa-github" style={{marginRight:"5px",fontSize:"18px"}}></i>Github Sign In</Button>
                <Hr/>
                <Form> 
                    <Input placeholder="Enter your Name" type="name" required/>
                     <Input placeholder="Enter your Email" type="email" required/>
                      <Input placeholder="Enter your Password" type="password" required/>
                      <RegButton>Register</RegButton>
                      <Text>Already Registered?<Link to="/login" className='link'>Please Login</Link></Text>
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Register;