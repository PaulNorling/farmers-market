import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const listings = useSelector((store) => store.listings);
  console.log('userpage', listings);

  useEffect(() => {
    dispatch({ type: 'FETCH_LISTINGS' });
}, []);

  return (
    <main>
      <div>
        {listings.map(listing => {
          return (
            <div key={listing.id}>
              <img src={listing.image}/>
              <h2>{listing.description}</h2>
            </div>
          )
        })}
      </div>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
