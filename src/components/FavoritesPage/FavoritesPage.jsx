import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesPageCard from "./FavoritesPageCard";

function FavoritesPage() {

    const dispatch = useDispatch();

    const favorites = useSelector(store => store.favorite)

    console.log('FavoritesPage', favorites)

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES_BY_USER' });
    }, []);

    return (
        
        <main>
        <h1>Your Favorites!</h1>
          <div className='cardGrid'>
          {favorites.map(favorite => {
            return (
                <FavoritesPageCard key={favorite.id} listing={favorite}/>
            )
          })}
        </div>
        </main>
      )
    
}

export default FavoritesPage;