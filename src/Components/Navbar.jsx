import React from 'react';
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';





const Header = () => {
    const [user] = useAuthState(auth)



    return (
       <div className='Navbar'>
         <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#"><img src="https://image.similarpng.com/very-thumbnail/2021/10/Restaurant-logo-template-on-transparent-background-PNG.png" alt="logo" width="80" height="80"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                 <Link to="/" className="link">Home</Link>
                  <Link to="/foodmenu" className="link">FoodMenu</Link>
                    <Link to="/cart" className="link">Cart</Link>
                  {
                    user ? <span></span> :  <Link to="/register" className="link">Register</Link>
                  }
                  {
                    user ? <button style={{marginLeft:"5px"}} onClick={() => signOut(auth)}>Logout</button> :   <Link to="/login" className="link">Login</Link>
                  }
                 
                  
                  
               
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       </div> 
       
    );
};

export default Header;