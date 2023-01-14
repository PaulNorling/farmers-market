import { GoogleMap, useLoadScript, Marker, MarkerF, LoadScript, InfoWindow } from "@react-google-maps/api";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
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

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };

    return (
      <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap 
        zoom={10.2} 
        center={{lat: 44.9778, lng: -93.2650}}
        mapContainerClassName="map-container"
        onClick={() => setActiveMarker(null)}
      >
      {listings.map(location => {
        return (
          <div key ={location.id}>
            <MarkerF onLoad={onLoad} position={{lat: +location.latitude, lng: +location.longitude}} onClick={() => handleActiveMarker(location.id)} >
            {activeMarker === location.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className="infoWindow">
                <div className="infoWindow-heading">{location.item}</div>
                <img className="infoWindow-image" src={location.image}/>
                <Button onClick={() => {history.push(`/detail/${location.id}`)}} variant="contained">Details</Button>
              </div>
            </InfoWindow>
          ) : null}
            </MarkerF>
          </div>
        )
      })}
      
      </GoogleMap>
      </LoadScript>
    )

}
export default Map;
