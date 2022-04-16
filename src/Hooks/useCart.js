import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
      const [cart, setCart] = useState([]);
      const [food,setFood] = useState([]);

      useEffect(() => {
           
               fetch("Data.json")
                 .then((res) => res.json())
                 .then((data) => setFood(data));
          

      },[])

      useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
          const addedProduct = food.find((food) => food.id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      }, [food]);
    return [cart,setCart];
};

export default useCart;