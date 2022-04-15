import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  padding:0px 120px;
`

const Left = styled.div`
margin:15px;
  
 
`
const Right = styled.div`
margin:15px;
  
`
const Image = styled.img`
  width:500px;
  height:550px;
  
`

const Name = styled.p`
  font-weight:600;
  color:red;
`;
const DishName = styled.h1``

const Desc = styled.p``

const FirstArticle = () => {
    return (
        <Container>
            <Left>
                <Image src="http://androthemes.com/themes/react/slices/assets/img/auth.jpg"/>


            </Left>
            <Right>
                <Name>Sir Sliec Heritage</Name>
                <DishName>Serving Pizza By the Slice Since 1987</DishName>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, deserunt quo ad dicta animi nihil excepturi atque error earum.</Desc>
                
            </Right>            
        </Container>
    );
};

export default FirstArticle;