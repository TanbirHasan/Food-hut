import React from 'react';

import styled from 'styled-components';
import {Card,Button} from 'react-bootstrap'
import Navbar from '../Components/Navbar';
import useFoods from '../Hooks/useFoods';


const Container = styled.div`

`;

const Wrapper = styled.div`
   
`;

const Title = styled.h2`
  text-align:center;
  margin:20px 0px;
`;

const Foodetails = ({food,handleAddtoCart}) => {

    const {id,img,name,price,title} = food;
    return (
        <Container>
        
          
            <Wrapper>
             
                    <div key={id} style={{marginTop:"20px"}}>
                        <Card style={{ width: '18rem',padding:"10px",textAlign:"center" }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                   {
                                       title
                                   }
                                </Card.Text>
                                <Card.Text>
                                    {
                                       ` Price : ${price}`
                                    }
                                </Card.Text>
                                <Button onClick={() => handleAddtoCart(food)}>Add to Cart</Button>
                              
                            </Card.Body>
                        </Card>
                    </div>
         

           </Wrapper>
          
            
        </Container>
    );
};

export default Foodetails;