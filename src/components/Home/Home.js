import React from 'react';
import About from './../../components/About/About';
import Skill from './../../components/Skill/Skill';
import Services from './../../components/Sevices/Services';
import Banner from './../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Services></Services>
        </div>
    );
};

export default Home;