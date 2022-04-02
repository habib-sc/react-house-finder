import React from 'react';
import AllListings from '../AllListings/AllListings';
import HeroSection from './HeroSection/HeroSection';

const Home = (props) => {
    const { getDetail } = props;
    return (
        <div>
            <HeroSection></HeroSection>
            <AllListings getDetail={getDetail}></AllListings>
        </div>
    );
};

export default Home;