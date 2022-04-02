import React from 'react';

const Header = () => {
    return (
        <div className='border-bottom bg-emerald-500'>
            <div className='container mx-auto flex justify-between items-center text-white text-lg'>
                <div className="logo">
                    <h1>House Finder</h1>
                </div>
                <div>
                    <nav>
                        <ul className='flex'>
                            <li className='ml-5 py-3'><a href="">Home</a></li>
                            <li className='ml-5 py-3'><a href="">For Rent</a></li>
                            <li className='ml-5 py-3'><a href="">For Sell</a></li>
                            <li className='ml-5 py-3'><a href="">Agents</a></li>
                            <li className='ml-5 py-3'><a href="">About</a></li>
                            <li className='ml-5 py-3'><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;