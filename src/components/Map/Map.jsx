import { GoogleMap, useLoadScript, Marker, MarkerF, LoadScript } from "@react-google-maps/api";
import {useHistory} from 'react-router-dom';
import './Map.css'


function Map(){

    const places = [{lat: 44.9778, lng: -93.2650}, {lat: 45.16173214652718, lng: -92.71747537315042}, {lat: 44.9537, lng: -93.0900}]

    const history = useHistory();

    const onLoad = marker => {
        console.log(marker)
    }

    function mpls(){
        console.log('mpls');
        history.push('/about')
    }


    return (
        
        <LoadScript
            //   googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap 
              zoom={10} 
              center={{lat: 44.9778, lng: -93.2650}}
              mapContainerClassName="map-container"
            >
            {/* {places.map(location => {
              return (
                <div key ={location.lat}>
                  <MarkerF onLoad={onLoad} position= {{location}}/>
                </div>
              )
            })} */}
              <MarkerF onClick={mpls} onLoad={onLoad} position= {{lat: 44.9778, lng: -93.2650}}/>
              <MarkerF onLoad={onLoad} position= {{lat: 45.16173214652718, lng: -92.71747537315042}}/>
              <MarkerF onLoad={onLoad} position= {{lat: 44.9537, lng: -93.0900}}/>
            </GoogleMap>
            </LoadScript>
    )

}
export default Map;