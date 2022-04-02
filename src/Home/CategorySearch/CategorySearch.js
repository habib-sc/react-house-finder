import React from 'react';

const CategorySearch = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <button className='bg-emerald-500 text-white px-3 py-2 rounded-t-lg mx-2'>All</button>
                <button className='bg-emerald-500 text-white px-3 py-2 rounded-t-lg mx-2'>For Rent</button>
                <button className='bg-emerald-500 text-white px-3 py-2 rounded-t-lg mx-2'>For Sale</button>
            </div>
            <div className='flex justify-center'>
                <div className='py-2 px-3 rounded-lg bg-emerald-500 w-[600px] flex justify-center items-center'>
                    <input type="text" placeholder='Search your house' className='w-96 px-2 py-2 rounded-lg mr-3' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default CategorySearch;