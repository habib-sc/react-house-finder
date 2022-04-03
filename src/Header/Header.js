import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function MyLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          className={`pt-1 pb-1.5 px-2 rounded ${match ? "border" : ""}`}
          style={{ border: match ? "" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

const Header = () => {
    return (
        <div className='border-bottom bg-emerald-500'>
            <div className='container mx-auto flex justify-between items-center text-white text-lg'>
                <div className="logo">
                    <h1>House Finder</h1>
                </div>
                <div>
                    <nav className='my-3'>
                        <ul className='flex'>
                            <li className='ml-2'><MyLink to="/">Home</MyLink></li>
                            <li className='ml-2'><MyLink to="/listings">All Listings</MyLink></li>
                            <li className='ml-2'><MyLink to="/for-rent">For Rent</MyLink></li>
                            <li className='ml-2'><MyLink to="/for-sale">For Sale</MyLink></li>
                            <li className='ml-2'><MyLink to="/agents">Agents</MyLink></li>
                            <li className='ml-2'><MyLink to="/about">About</MyLink></li>
                            <li className='ml-2'><MyLink to="/contact">Contact</MyLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;