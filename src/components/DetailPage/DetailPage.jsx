import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams();

    const dispatch = useDispatch();

    const detail = useSelector(store => store.listings)
    console.log('detailpage', detail)

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params.id});
    }, []);

    console.log('detail', params.id)
    return(
        <div>
          <h1>Details!</h1>
          {/* loop through array of 1 any better ideas? */}
          {detail.map(info => {
            return(
                <div key={info.id}>
                    <img src={info.image}/>
                </div>
            )})}
        </div>
    )
}

export default DetailPage;