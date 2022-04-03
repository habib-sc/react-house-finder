import { useEffect, useState } from "react";

const useListings = () => {
    const [listings, setListings] = useState([]);
    useEffect( () => {
        fetch('listings.json')
        .then(res => res.json())
        .then(data => setListings(data));
    } , []);

    return [listings, setListings];
};

export default useListings;