import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function YourListings() {
    const dispatch = useDispatch();

    const yourListings = useSelector((store) => store.listings);
    console.log('yourlisings', yourListings)
    useEffect(() => {
        dispatch({ type: 'FETCH_LISTINGS_BY_USER' });
    }, []);

    return (
        <div>
        <h1>Your Listings!</h1>
        {yourListings.map(listing => {
          return (
            <div key={listing.id}>
              <img src={listing.image}/>
              <h2>{listing.description}</h2>
            </div>
          )
        })}
      </div>
    )
}

export default YourListings;