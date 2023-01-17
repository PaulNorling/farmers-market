import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UserPageCard from '../UserPage/UserPageCard';
import Map from '../Map/Map';
import './Search.css'

function Search() {

    const dispatch = useDispatch();  

    const listings = useSelector((store) => store.listings);
  
    console.log('searchpage', listings);

    const [zip, setZip] = useState('');
    

    function handleClick() {
        console.log(zip)
        dispatch({ type: 'SEARCH_FETCH', payload: zip})
    }

    return (
        <div>
          <div className='search-input'>
            <TextField placeholder='search' onChange={(event) => setZip(event.target.value)}/>
            <Button variant="contained" sx={{margin: 1 }} onClick={handleClick}>Search</Button>
          </div>
          <Map />
          <div className='heading-container'>
            <h2>Search Results</h2>
          </div>
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