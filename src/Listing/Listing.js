import React from 'react';
import { Link } from 'react-router-dom';


const Listing = (props) => {
    const {id, category, name, price, propertyType, bedrooms, bathrooms, garage, size, img } = props.listing;
    const { getDetail } = props;

    return (
        <Link to={'/listings/'+id} onClick={ () => {getDetail(props.listing)}}>
            <div className='border border-emerald-400 min-h-[300px] rounded p-5 flex flex-col items-center justify-center shadow-2xl'>
                <img className='object-cover rounded' src={img} alt="" />
                <h2 className='mt-3 text-xl'>{name}</h2>
                <p>
                    <span>$</span>{price}
                    <span className='text-2xl text-emerald-500'>{`${category === 'for-rent' ? " /mo" : ""}`}</span>
                </p>
                <div className='flex mt-2'>
                    <div className='mx-1 flex items-center'><img src="images/icons/bed.png" alt="" className='mx-1 h-5' />{bedrooms}</div>
                    <div className='mx-1 flex items-center'><img src="images/icons/shower.png" alt="" className='mx-1 h-5' />{bathrooms}</div>
                    <div className='mx-1 flex items-center'><img src="images/icons/car.png" alt="" className='mx-1 h-5' />{garage}</div>
                    <div className='mx-1 flex items-center'><img src="images/icons/ruler.png" alt="" className='mx-1 h-5' />{size} m<sup>2</sup></div>
                </div>
            </div>
        </Link>
    );
};

export default Listing;