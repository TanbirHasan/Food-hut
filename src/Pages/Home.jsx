import React from 'react';
import Banner from '../Components/Banner';
import FirstArticle from '../Components/FirstArticle';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import Middlesection from "../Components/Middlesection";

import RandomMeal from '../Components/RandomMeal';
import Questions from '../Components/Questions';

const Home = () => {
    return (
        <div>
             
                <Banner/>
                <FirstArticle/>
                <RandomMeal/>
                <Middlesection/>
                <Questions/>
            
             
                        
        </div>
    );
};

export default Home;