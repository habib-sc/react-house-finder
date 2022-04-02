import React from 'react';
import CategorySearch from '../CategorySearch/CategorySearch';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='container mx-auto h-full flex justify-center items-center'>
                <CategorySearch></CategorySearch>
            </div>
        </div>
    );
};

export default HeroSection;