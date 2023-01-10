import React, { useEffect } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import UserPageCard from './UserPageCard';
import Search from '../Search/Search';
import Carousel from '../Carousel/Carousel';
import Map from '../Map/Map';
import './UserPage.css'

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);

  const listings = useSelector((store) => store.listings);
  
  console.log('userpage', listings);

  useEffect(() => {
    dispatch({ type: 'FETCH_LISTINGS_BY_ZIP' });
}, []);

  return (
    <main>
      <Carousel />
      <div className='heading-container'>
        <h2>Find Local Listings</h2>
      </div>
      <Map />
      <div className='heading-container'>
        <h2>Listings near you</h2>
      </div>
      <div className='cardGrid'>
        {listings.map(listing => {
          return (
            <UserPageCard key={listing.id} listing={listing}/>
          )
        })}
      </div>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
