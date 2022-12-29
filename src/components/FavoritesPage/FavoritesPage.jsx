import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FavoritesPageCard from "./FavoritesPageCard";

function FavoritesPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_FAVORITES_BY_USER' });
    }, []);

    return (
        <FavoritesPageCard/>
    )
}

export default FavoritesPage;