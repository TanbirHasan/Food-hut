import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  padding:70px;
`

const Left = styled.div`
    width:50%;

`
const Name = styled.h2``
const Title = styled.h3``
const Desc = styled.p``
const Right = styled.div`
    width:50%;
`
const Image = styled.img`
  width:100%
`

const Banner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                  <Container>
                      <Left>
                          <Name>Green Delight</Name>
                          <Title>Vegitable Pizza</Title>
                          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, fugit?</Desc>
                      </Left>
                      <Right>
                          <Image src="http://androthemes.com/themes/react/slices/assets/img/prods/2.png"/>
                      </Right>
                  </Container>
                   
                </Carousel.Item>
                <Carousel.Item>
                      <Container>
                      <Left>
                          <Name>Green Delight</Name>
                          <Title>Vegitable Pizza</Title>
                          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, fugit?</Desc>
                      </Left>
                      <Right>
                          <Image src="http://androthemes.com/themes/react/slices/assets/img/prods-sm/5.png"/>
                      </Right>
                  </Container>
                   
                </Carousel.Item>
                <Carousel.Item>
                      <Container>
                      <Left>
                          <Name>Green Delight</Name>
                          <Title>Vegitable Pizza</Title>
                          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, fugit?</Desc>
                      </Left>
                      <Right>
                          <Image src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg"/>
                      </Right>
                  </Container>
                   
                </Carousel.Item>
                </Carousel>
           
            
        </Container>
    );
};

export default Banner;