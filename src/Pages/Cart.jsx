import React from 'react';
import styledComponents from 'styled-components';
import Navbar from '../Components/Navbar';
import useCart from '../Hooks/useCart';
import Choosemeal from "../Components/Choosemeal"
import Footer from '../Components/Footer';






const Container = styledComponents.div`
  

  
`

const Wrapper = styledComponents.div`
   display:flex;
   justify-content:center;
   width:40%;
   border-radius:10px;
   margin:30px auto;
   flex-direction:column;
   padding:15px;
   align-items:center;
   background-color:whitesmoke;
  
`

const Button = styledComponents.button`
  padding:10px 25px;
  background-color:tomato;
  border-radius:10px;
  color:white;
  font-weight:600;
  border:none;

`
const Cart = () => {
    const [cart] = useCart();

    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const food of cart){
        
        quantity = quantity + food.quantity;
        
        total = total + parseInt(food.price) * food.quantity;
        console.log(total);
        shipping = 30;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <Container>
             <Navbar/>
            <Wrapper>
                    <h4>Order Summary</h4>
                    <p>Selected Items: {quantity}</p>
                    <p>Total price: ${total}</p>
                    <p>Total Shipping: ${shipping}</p>
                    <p>Tax: {tax}</p>
                    <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
                    <Button>Proceed to Checkout</Button>

            </Wrapper>
           <Footer/>
            
           
       
         
        </Container>
    );
};

export default Cart;