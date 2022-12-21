import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params.id});
    }, []);

    console.log('detail', params.id)
    return(
        <h1>Details!</h1>
    )
}

export default DetailPage;