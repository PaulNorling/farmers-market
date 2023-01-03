import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserPageCard from '../UserPage/UserPageCard';

function Search() {

    const dispatch = useDispatch();  

    const listings = useSelector((store) => store.search);
  
    console.log('searchpage', listings);

    const [zip, setZip] = useState('');
    

    function handleClick() {
        console.log(zip)
        dispatch({ type: 'SEARCH_FETCH',
                   payload: zip})
    }

    return (
        <div>
          <div>Search by Zip</div>
          <input onChange={(event) => setZip(event.target.value)}/>
          <button onClick={handleClick}>Search</button>
          <div className='cardGrid'>
        {listings.map(listing => {
          return (
            <UserPageCard key={listing.id} listing={listing}/>
          )
        })}
      </div>
        </div>
    )
}

export default Search;