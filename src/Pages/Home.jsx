import React from 'react';
import Banner from '../Components/Banner';
import FirstArticle from '../Components/FirstArticle';
import Footer from '../Components/Footer';
import Header from '../Components/Navbar';
import Middlesection from "../Components/Middlesection";

import RandomMeal from '../Components/RandomMeal';
import Questions from '../Components/Questions';
import MenuList from '../Components/MenuList';
import PageTitle from '../Components/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
             
                <Banner/>
                <FirstArticle/>
                <RandomMeal/>
                <Middlesection/>
                <MenuList/>
                <Questions/>
            
             
                        
        </div>
    );
};

export default Home;