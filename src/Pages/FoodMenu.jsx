import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Card,Button} from 'react-bootstrap'
import Navbar from '../Components/Navbar';


const Container = styled.div`

`;

const Wrapper = styled.div`
    display:flex;
   flex-wrap:wrap;
   justify-content:space-evenly;
   margin-top:40px;
`;

const Title = styled.h2`
  text-align:center;
  margin:20px 0px;
`;


const FoodMenu = () => {

    const [food,setFood] = useState([]);

    useEffect(() => {
        fetch("Data.json")
        .then(res => res.json())
        .then(data => setFood(data));
    },[])
    return (
        <Container>
        
            <Navbar/>
            <Title>Choose Your Best Meal</Title>
            <Wrapper>
                 {
                food.map((item) => (
                    <div key={item} style={{marginTop:"20px"}}>
                        <Card style={{ width: '18rem',padding:"10px",textAlign:"center" }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                   {
                                       item.title
                                   }
                                </Card.Text>
                                <Card.Text>
                                    {
                                       ` Price : ${item.price}`
                                    }
                                </Card.Text>
                                <Button>Add to Cart</Button>
                              
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }

           </Wrapper>
          
            
        </Container>
    );
};

export default FoodMenu;