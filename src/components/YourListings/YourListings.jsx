import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import YourListingsCard from './YourListingsCard';

function YourListings() {
    const dispatch = useDispatch();

    const yourListings = useSelector((store) => store.listings);
    console.log('yourlisings', yourListings)
    
    useEffect(() => {
        dispatch({ type: 'FETCH_LISTINGS_BY_USER' });
    }, []);

    return (
      <main>
      <h1>Your Listings!</h1>
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