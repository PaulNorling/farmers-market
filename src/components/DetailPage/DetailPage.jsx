import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import './DetailPage.css'

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
        {/* loop through array of 1 any better ideas?  */}
         {detail.map(info => {
          return(
              <div key={info.id}>
                <div className='heading-container'>
                    <div className='section-container'>
                        <h2>{info.item}</h2>
                        <img src={info.image}/>
                    </div>
                    <div className='section-container'>
                        <h2>Contact Information</h2>
                        <h3>{info.name}</h3>
                        <h4>{info.address}</h4>
                        <h4>{info.email}</h4>
                        <h4>{info.phone_number}</h4>
                    </div>
                </div>
                <div className='section-container'>
                  <p>{info.description}</p> 
                </div>
                
              </div>
          )})}
      </div>
    )
}

export default DetailPage;