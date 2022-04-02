import React from 'react';
import AllListings from '../AllListings/AllListings';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AllListings></AllListings>
        </div>
    );
};

export default Home;