import React, { useEffect } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import UserPageCard from './UserPageCard';
import Search from '../Search/Search';
import './UserPage.css'

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
      <Search/>
      <div className='cardGrid'>
        {listings.map(listing => {
          return (
            <UserPageCard key={listing.id} listing={listing}/>
          )
        })}
      </div>
      {/* <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div> */}
    </main>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
