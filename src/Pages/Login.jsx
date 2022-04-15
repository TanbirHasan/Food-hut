import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';



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
    return (
         <Container>
            <Navbar/>
            <Wrapper>
                <Form> 
                   
                     <Input placeholder="Enter your Email" type="email" required/>
                      <Input placeholder="Enter your Password" type="password" required/>
                      <Button>Login</Button>
                      <Text>New to Food hut?<Link to="/register" className='link'>Register</Link></Text>
                </Form>
            </Wrapper>
            
        </Container>
    );
};

export default Login;