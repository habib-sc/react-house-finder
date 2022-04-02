import React, { useEffect, useState } from 'react';
import Listing from '../Listing/Listing';

const AllListings = (props) => {
    const { getDetail } = props;
    const [listings, setListings] = useState([]);

    useEffect( () => {
        fetch('listings.json')
        .then(res => res.json())
        .then(data => setListings(data));
    } , []);

    return (
        <div className='my-12'>
            <div>
                <h1 className='text-3xl text-center font-medium'>Our Exclusive Property</h1>
                <p className='w-[500px] mx-auto text-center mt-2'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio enim distinctio accusantium doloremque
                </p>
            </div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10'>
                {
                    listings.map(listing => <Listing key={listing.id} listing={listing} getDetail={getDetail}></Listing>)
                }
            </div>
        </div>
    );
};

export default AllListings;