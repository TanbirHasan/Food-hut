import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
  height:50vh;
  justify-content:space-evenly;
  background-color:#2E4053 ;
  padding-top:80px;
  color:white;
`

const Left = styled.div``;

const Center = styled.div``;
const Right = styled.div``;

const Image = styled.img`
  width:300px;
  height:200px;
  border-radius:10px;
`;

const Menulist = styled.div``;

const ListItem = styled.h3`
  font-size:22px;
  cursor:pointer;
`;

const SocialMedia = styled.div``;

const Icon = styled.span`
  font-size:26px;
  margin:10px 7px;
  cursor:pointer;

`;

const Paragraph = styled.p`
  
`

const Button = styled.button`
  padding:10px;
  width:100px;
  background-color:tomato;
  border-radius:10px 25px;
  border:none;
  color:white;
  font-weight:500;
 `;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Image src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </Left>
            <Center>
                <Menulist>
                    <ListItem>Home</ListItem>
                    <ListItem>FoodItem</ListItem>
                    <ListItem>About Us</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Register</ListItem>
                </Menulist>
            </Center>
            <Right>
                <SocialMedia>
                    <ListItem>Social Media</ListItem>
                    <Icon><i class="fa-brands fa-facebook"></i></Icon>
                     <Icon><i class="fa-brands fa-twitter"></i></Icon>
                      <Icon><i class="fa-brands fa-instagram"></i></Icon>
                       <Icon><i class="fa-brands fa-google-plus-square"></i></Icon>
                      <Paragraph>Sign up and get exclusive offer and coupon codes</Paragraph> 
                      <Button>Sign Up</Button>
                </SocialMedia>
            </Right>
            
        </Container>
    );
};

export default Footer;