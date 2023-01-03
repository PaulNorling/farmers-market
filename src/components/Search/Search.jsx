import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Search() {

    const dispatch = useDispatch();  

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
        </div>
    )
}

export default Search;