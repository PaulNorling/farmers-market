import { GoogleMap, useLoadScript, Marker, MarkerF, LoadScript } from "@react-google-maps/api";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import './Map.css'


function Map(){

    

    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: 'FETCH_LISTINGS' });
  }, []);

    const listings = useSelector(store => store.listings)

    console.log("MAP", listings)

    const onLoad = marker => {
        console.log(marker)
    }

    function mpls(){
        console.log('mpls');
        history.push('/about')
    }

    
    return (
      <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap 
        zoom={10} 
        center={{lat: 44.9778, lng: -93.2650}}
        mapContainerClassName="map-container"
      >
      {listings.map(location => {
        // const coordinates = {lat: +location.latitude, lng: +location.longitude};
        return (
          <div key ={location.id}>
            <MarkerF onLoad={onLoad} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => {history.push(`/detail/${location.id}`)}}/>
          </div>
        )
      })}
      </GoogleMap>
      </LoadScript>
    )

}
export default Map;