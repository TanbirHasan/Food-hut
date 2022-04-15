import React from 'react';
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Nav = styled.nav`
   display:flex;
   justify-content:space-between;
   padding:15px 100px;
   align-items:center;

   background-color:whitesmoke;

`
const Logo = styled.img`
   width:70px;
   height:70px;
  

`
const Menu = styled.div`
  
`
const MenuItem = styled.div`
  display:flex;
  
  
`
const Item = styled.span`
  font-size:18px;
  font-weight:500;
  margin-left:10px;
  cursor:pointer;
  
`


const Navbar = () => {
    const [user] = useAuthState(auth)



    return (
        <Nav>
            <Logo src="https://image.similarpng.com/very-thumbnail/2021/10/Restaurant-logo-template-on-transparent-background-PNG.png"/>
            <Menu>
                <MenuItem>
                 <Link to="/" className='link'> <Item>Home</Item></Link>
                 <Link to="/foodmenu" className='link'> <Item>FoodMenu</Item></Link>
                 <Link to="/aboutus" className='link'>   <Item>About Us</Item></Link>
                 {
                   user ? <Item onClick={() => signOut(auth)}>Logout</Item> : <Link to="/login" className='link'>  <Item>Login</Item></Link>
                 }
                 {
                   user ? " " :  <Link to="/register" className='link'>   <Item>Register</Item></Link>
                 }
                 
                
                 
                   
                  
                  
                   
                 
                </MenuItem>
            </Menu>


            
        </Nav>
    );
};

export default Navbar;