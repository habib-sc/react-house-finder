import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllListings from './AllListings/AllListings';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import ListingDetail from './Listing/ListingDetail/ListingDetail';
import NotFound from './NotFound/NotFound';
import RentListings from './RentListings/RentListings';
import SaleListings from './SaleListings/SaleListings';

export const ListingsContext = createContext('Listing Context');

function App() {

  const [listingDetail, setListingDetail] = useState({});

  const getDetail = (clickedItem) => {
     setListingDetail(clickedItem);
  }

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home getDetail={getDetail}></Home>}></Route>
        <Route path='/listings' element={<AllListings getDetail={getDetail}></AllListings>}></Route>
        <Route path='listings/:listing' element={<ListingDetail listingDetail={listingDetail}></ListingDetail>}></Route>
        <Route path='/for-rent' element={<RentListings></RentListings>}></Route>
        <Route path='/for-sale' element={<SaleListings></SaleListings>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
