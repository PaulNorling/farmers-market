import { GoogleMap, useLoadScript, Marker, MarkerF, LoadScript } from "@react-google-maps/api";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import './Map.css'


function Map(){

    const places = [{location: {lat: 45.16173214652718, lng: -92.71747537315042}}, {location: {lat: 44.9537, lng: -93.0900}}, {location: {lat: 44.95, lng: -93}}]

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
        const coordinates = {lat: +location.latitude, lng: +location.longitude};
        // console.log('Map Map', {lat: location.latitude, lng: location.longitude}, coordinates)
        return (
          <div key ={location.id}>
            <MarkerF onLoad={onLoad} position={coordinates} onClick={() => {history.push(`/detail/${location.id}`)}}/>
          </div>
        )
      })}
        <MarkerF onClick={mpls} onLoad={onLoad} position= {{lat: 44.9778, lng: -93.2650}}/>
      </GoogleMap>
      </LoadScript>
    )

}
export default Map;