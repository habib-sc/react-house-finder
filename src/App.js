import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import RentListings from './RentListings/RentListings';
import SaleListings from './SaleListings/SaleListings';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/for-rent' element={<RentListings></RentListings>}></Route>
        <Route path='/for-sale' element={<SaleListings></SaleListings>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
