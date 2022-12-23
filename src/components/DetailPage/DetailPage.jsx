import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams();

    const dispatch = useDispatch();

    const detail = useSelector(store => store.listings[0])
    
    console.log('detailpage', detail)

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params.id});
    }, []);

    console.log('detail', params.id)
    return(
        <div className='container'>
          <h1>{detail.item}</h1>
          <div className="grid">
            <header>{detail.id}</header>
            <img src={detail.image}/>
            <p>{detail.description}</p>
          </div>
        </div>
    )
}

export default DetailPage;