import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import YourListingsCard from './YourListingsCard';
import './YourListings.css'

function YourListings() {
    const dispatch = useDispatch();

    const yourListings = useSelector((store) => store.listings);
    console.log('yourlisings', yourListings)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_LISTINGS_BY_USER' });
    }, []);

    return (
      <main className='yourListings-main'>
        <div className='heading-container'>
          <h2>Your Listings!</h2>
        </div>
        <div className='cardGrid'>
        {yourListings.map(listing => {
          return (
            <YourListingsCard key={listing.id} listing={listing}/>
          )
        })}
      </div>
      </main>
    )
}

export default YourListings;