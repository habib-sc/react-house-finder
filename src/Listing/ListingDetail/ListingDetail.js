import React from 'react';

const ListingDetail = (props) => {
    const { category, name, price, propertyType, agentName, bedrooms, bathrooms, garage, size, img } = props.listingDetail;

    return (
            <div className='container mx-auto my-20'>
            {name &&
                <div className='border border-emerald-400 min-h-[300px] rounded p-5 flex items-center justify-center shadow-2xl'>
                    <div className='mr-20'>
                        <img className='object-cover rounded h-[350px] w-[500px]' src={img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-3xl'>{name}</h2>
                        <p className='text-3xl my-5'>
                            Price: <span>$</span>{price}
                            <span className='text-3xl text-emerald-500'>{`${category === 'for-rent' ? " /mo" : ""}`}</span>
                        </p>
                        <div className='flex mt-2 text-3xl'>
                            <div className='mr-5 flex items-center'><img src="https://raw.githubusercontent.com/habib-sc/react-house-finder/main/public/images/icons/bed.png" alt="" className='mx-1' />{bedrooms}</div>
                            <div className='mr-5 flex items-center'><img src="https://raw.githubusercontent.com/habib-sc/react-house-finder/main/public/images/icons/shower.png" alt="" className='mx-1' />{bathrooms}</div>
                            <div className='mr-5 flex items-center'><img src="https://raw.githubusercontent.com/habib-sc/react-house-finder/main/public/images/icons/car.png" alt="" className='mx-1' />{garage}</div>
                            <div className='mr-5 flex items-center'><img src="https://raw.githubusercontent.com/habib-sc/react-house-finder/main/public/images/icons/ruler.png" alt="" className='mx-1' />{size} m<sup>2</sup></div>
                        </div>
                        <p className='text-3xl my-5'>Property Type: {propertyType}</p>
                        <p className='text-3xl'>Agent Name: {agentName}</p>
                    </div>
                </div>
            }
            </div>
        
        
    );
};

export default ListingDetail;