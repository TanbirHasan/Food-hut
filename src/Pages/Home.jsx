import React from 'react';
import Banner from '../Components/Banner';
import FirstArticle from '../Components/FirstArticle';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import RandomMeal from '../Components/RandomMeal';

const Home = () => {
    return (
        <div>
              <Navbar/>
                <Banner/>
                <FirstArticle/>
                <RandomMeal/>
                <Footer/>
                        
        </div>
    );
};

export default Home;