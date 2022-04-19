import React from 'react';
import styledComponents from 'styled-components';







const Wrapper = styledComponents.div``;

const Image = styledComponents.img`
  width:550px;
  height:400px;
  display:flex;
  justify-content:center;
  margin:30px auto;
`;

const Title = styledComponents.h2``;

const TextContainer = styledComponents.div`
display: flex;
width:600px;
margin:30px auto;
flex-direction:column;
align-items:center;

`;

const Desc = styledComponents.p``;


const AboutUs = () => {
    return (
        <div>
        
            <Wrapper>
                <Image src="https://images.pexels.com/photos/8753556/pexels-photo-8753556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <TextContainer>
                     <Title>We are alwys Open for You...</Title>
                <Desc>Food hut, with several locations in Massachusetts, Virginia, and California, uses their blog to feature pizzas of the month, including appetizing pictures and tasty descriptions. Rather than overloading the reader with too much writing, these blog posts urge customers to try it for themselves “by the pie or by the slice all month long!”</Desc>

                </TextContainer>
               

            </Wrapper>
        </div>
    );
};

export default AboutUs;