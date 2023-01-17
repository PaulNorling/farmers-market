import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UserPageCard from './UserPageCard';

import Carousel from '../Carousel/Carousel';
import Map from '../Map/Map';
import './UserPage.css'

function UserPage() {
  
  const dispatch = useDispatch();

  const listings = useSelector((store) => store.listings);
  
  console.log('userpage', listings);

  useEffect(() => {
    dispatch({ type: 'FETCH_LISTINGS' });
}, []);

  return (
    <main>
      <Carousel />
      <div className='heading-container'>
        <h2>Local Listings</h2>
      </div>
      <Map />
      <div className='heading-container'>
        <h2>Listings</h2>
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
