import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Card,Button} from 'react-bootstrap'

import useFoods from '../Hooks/useFoods';
import { addToDb, getStoredCart } from '../utilities/fakedb';
import Foodetails from './Fooddetails';
import Footer from '../Components/Footer';
import PageTitle from '../Components/PageTitle';


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

    const [food,setFood] = useFoods();
    const [cart, setCart] = useState([]);

     useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = food.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [food])


  


     const handleAddtoCart = (selectedProduct) =>{

        console.log(selectedProduct);
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(food => food.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(food => food.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
       
    }


    return (
        <Container>
            <PageTitle title="FoodMenu"></PageTitle>
        
           
            <Title>Choose Your Best Meal</Title>
            <Wrapper>
                {
                    food.map((item) => (
                        <Foodetails food={item} key={food.id} handleAddtoCart={handleAddtoCart}></Foodetails>
                    ))
                }

           </Wrapper>

          
          
            
        </Container>
    );
};

export default FoodMenu;