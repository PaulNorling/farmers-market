import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesPageCard from "./FavoritesPageCard";
import './FavoritesPage.css'

function FavoritesPage() {

    const dispatch = useDispatch();

    const favorites = useSelector(store => store.favorite)

    console.log('FavoritesPage', favorites)

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES_BY_USER' });
    }, []);

    return (
        
        <main className='favorite-main'>
       <div className='heading-container'>
          <h2>Favorites!</h2>
        </div>
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