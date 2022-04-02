import React, { useState } from 'react';

const CategorySearch = () => {

    const [searchCategory, setSearchCategory] = useState('');

    const getButtonCategory = (categoryName) => {
        setSearchCategory(categoryName);
    }

    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <button onClick={ () => {getButtonCategory('all')}} className={`px-3 py-2 rounded-t mx-1 ${searchCategory === 'all' ? "bg-emerald-500 text-white" : "bg-white"}`}>All</button>
                <button onClick={ () => {getButtonCategory('for-rent')}} className={`px-3 py-2 rounded-t mx-1 ${searchCategory === 'for-rent' ? "bg-emerald-500 text-white" : "bg-white"}`}>For Rent</button>
                <button onClick={ () => {getButtonCategory('for-sale')}} className={`px-3 py-2 rounded-t mx-1 ${searchCategory === 'for-sale' ? "bg-emerald-500 text-white" : "bg-white"}`}>For Sale</button>
            </div>
            <div className='flex justify-center'>
                <div className='py-1 px-3 rounded bg-emerald-500 w-[600px] flex justify-center items-center'>
                    <input type="text" placeholder='Search your house' className='w-96 px-2 py-1 rounded mr-3' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default CategorySearch;