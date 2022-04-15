import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {Card,Button} from 'react-bootstrap'




const Container = styled.div`
     margin:80px 0px;
 
`;

const Wrapper = styled.div`
     display:flex;
   flex-wrap:wrap;
   justify-content:space-evenly;
   margin-top:40px;
`
const Title = styled.h2`
  text-align:center;
`

const RandomMeal = () => {

    const [food,setFood] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setFood(data.categories));
    }, [])
   

    console.log(food);

    return (
        <Container>
              <Title>List of Items</Title>
           <Wrapper>
                 {
                food.map((item) => (
                    <div key={item} style={{marginTop:"20px"}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.strCategoryThumb} />
                            <Card.Body>
                                <Card.Title>{item.strCategory}</Card.Title>
                                <Card.Text>
                                  {
                                      `${item.strCategoryDescription.slice(0,90)}...`
                                  }
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                    </div>
                ))
            }

           </Wrapper>
          
            
        </Container>
    );
};

export default RandomMeal;