import React from 'react';

const Listing = (props) => {
    const { category, name, agentName, price, propertyType, bedrooms, bathrooms, size, img } = props.listing;
    console.log(props.listing)
    return (
        <div className='border border-emerald-400 min-h-[300px] rounded p-5 flex flex-col items-center justify-center'>
            <img className='object-cover rounded' src={img} alt="" />
            <h2 className='mt-3 text-xl'>{name}</h2>
            <p>
                <span>$</span>{price}
                <span className='text-2xl text-emerald-500'>{`${category === 'for-rent' ? " /mo" : ""}`}</span>
            </p>
        </div>
    );
};

export default Listing;