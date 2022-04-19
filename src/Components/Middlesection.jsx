import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styledComponents from 'styled-components';



const Container = styledComponents.div` 
  padding:0px 25px;
  
`;

const Wrapperone = styledComponents.div`
  display:flex;
  justify-content:space-evenly;
  align-items:start;
  margin:30px 0px;
`;
const Wrappertwo = styledComponents.div`
    display:flex;
  justify-content:space-evenly;
  align-items:start;
  margin:30px 0px;
 `;

const Left = styledComponents.div`
  width:33%;
  padding:15px;
`;

const Middle = styledComponents.div` 
   width:33%;
    padding:15px;
`;

const Right = styledComponents.div` 
   width:33%;
   display:flex;
    padding:15px;
    flex-direction:column;
    align-items:center;


   
`;

const Image = styledComponents.img` 
   max-width:100%;
   object-fit:cover;
`;
const Title = styledComponents.h2` `;

const Desc = styledComponents.p` `;
const Middlesection = () => {
    const carni = 60;
    const veg = 30;
    return (
        <Container>
            <Wrapperone>
                  <Left>
                <Image src="http://templates.framework-y.com/gourmet/images/gallery/food-big-1.jpg" alt="burger"/>
            </Left>
            <Middle>
                <h5>Explosion of great taste</h5>
                <Title>Mega Fish Burger Deluxe</Title>
                <span>CARNIVOUROUS</span>
                <ProgressBar now={carni} label={`${carni}%`} style={{marginBottom:"12px"}}/>
                 <span>VEGETARIAN</span>
                <ProgressBar now={veg} label={`${veg}%`} style={{marginBottom:"12px"}}/>
            </Middle>
            <Right>
                <Desc>
                    Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elite sartonetro permo.
                </Desc>
            </Right>

            </Wrapperone>
            <Wrappertwo>
                   <Middle>
                <h5>Explosion of great taste</h5>
                <Title>Double Cheese Burger</Title>
                <span>CARNIVOUROUS</span>
                <ProgressBar now={carni} label={`${carni}%`} style={{marginBottom:"12px"}}/>
                 <span>VEGETARIAN</span>
                <ProgressBar now={veg} label={`${veg}%`} style={{marginBottom:"12px"}}/>
            </Middle>
              <Right>
                <Desc>
                    Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel. Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elite sartonetro permo.
                    <h2>34 $</h2>
                </Desc>
            </Right>
              <Left>
                <Image src="http://templates.framework-y.com/gourmet/images/gallery/food-big-2.jpg" alt="burger"/>
            </Left>

            </Wrappertwo>
          
           
            
        </Container>
    );
};

export default Middlesection;