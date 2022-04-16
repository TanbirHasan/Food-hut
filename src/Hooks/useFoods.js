import React, { useEffect, useState } from 'react';

const useFoods = () => {

    const [food, setFood] = useState([]);

       useEffect(() => {
         fetch("Data.json")
           .then((res) => res.json())
           .then((data) => setFood(data));
       }, [food]);

       return [food, setFood];
    
};

export default useFoods;