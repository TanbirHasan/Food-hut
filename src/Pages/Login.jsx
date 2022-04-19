import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import auth from '../firebase.init';



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
const Button = styled.button`
  padding:10px 30px;
  background-color:tomato;
  border-radius:12px;
  border:none;
  color:white;
  display:block;
`;

const Text = styled.span``;
const Login = () => {

  const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);


const emailref = useRef();
const passref = useRef(); 

  const location = useLocation();
  const navigate = useNavigate();


   let from = location.state?.from?.pathname || "/";


  if(user){
     navigate(from, { replace: true });
  }


  const handleSubmit = (e) => {


    e.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;

    signInWithEmailAndPassword(email,password);


  }
   
    return (
         <Container>
           
            <Wrapper>
                <Form onSubmit={handleSubmit}> 
                   
                     <Input placeholder="Enter your Email" type="email" ref={emailref} required/>
                      <Input placeholder="Enter your Password" type="password" ref={passref} required/>
                      <Button type="submit">Login</Button>
                      <Text>New to Food hut?<Link to="/register" className='link'>Register</Link></Text>
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Login;