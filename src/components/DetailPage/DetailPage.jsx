import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import './DetailPage.css'

function DetailPage() {
    const history = useHistory();

    const params = useParams();

    const dispatch = useDispatch();

    const detail = useSelector(store => store.listings)

    const user = useSelector(store => store.user)
    
    console.log('detailpage', detail)

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params.id});
        dispatch({ type: 'FETCH_FAVORITE', payload: user.id});
    }, []);

    
    function favorite() {
        console.log('clicked', params.id, user.id)
        dispatch({ 
            type: 'ADD_FAVORITE', 
            payload: {
                listings_id: params.id,
                user_id: user.id
            }
        })
    };


    console.log('detail', params.id)
    return(
        <div className="detail-container">
            <StarOutlineIcon onClick={favorite} className='fav-icon'/>
        {/* loop through array of 1 any better ideas?  */}
         {detail.map(info => {
          return(
              <div key={info.id} >
                <div className='heading-container'>
                    <div className='section-container'>
                        <h2>{info.item}</h2>
                        <img className="detail-img" height={500} width={650} src={info.image}/>
                    </div>
                    <div className='section2-container'>
                        <h2>Contact Information</h2>
                        <h5>Name</h5>
                        <h3>{info.name}</h3>
                        <h5>Address</h5>
                        <h4>{info.address}</h4>
                        <h5>Email</h5>
                        <h4>{info.email}</h4>
                        <h5>Phone Number</h5>
                        <h4>{info.phone_number}</h4>
                    </div>
                </div>
                <div className='section3-container'>
                  <p>{info.description}</p> 
                </div>
              </div> 
          )})}
          <Button onClick={() => {history.push('/')}}variant="contained">Back</Button>
      </div>
    )
}

export default DetailPage;