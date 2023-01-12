import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './EditPage.css'


function EditPage() {

  const params = useParams();

  const history = useHistory();

  const detail = useSelector(store => store.edit)
    
  console.log('editpage', detail[0])

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch({ type: 'FETCH_DETAIL', payload: params.id});
}, []);

  const [heading, setHeading] = useState(detail.item);
  const [description, setDescription] = useState(detail.description);
  const [name, setName] = useState(detail.name);
  const [address, setAddress] = useState(detail.address);
  const [zip, setZip] = useState(detail.zip);
  const [phoneNumber, setPhoneNumber] = useState(detail.phone_number);
  const [email, setEmail] = useState(detail.email);
  const [image, setImage] = useState(detail.image);
  const [latitude, setLatitude] = useState(detail.latitude);
  const [longitude, setLongitude] = useState(detail.longitude);

  const editListing = (event) => {
    event.preventDefault();

    dispatch({
        type: 'EDIT_LISTING',
        payload: {
            id: detail.id,
            heading: heading,
            description: description,
            name: name,
            address: address,
            zip: zip,
            phone_number: phoneNumber,
            email: email,
            latitude: latitude,
            longitude: longitude,
            image: image,
        },
        history: history 
    })
};

return (
  <div>     
    <form className="addListingForm" onSubmit={editListing}>
      <h1>Edit Listing</h1>
      <div>
        <label htmlFor="heading">
          Listing Title:
          <input
            className='listingInput'
            type="text"
            name="heading"
            value={heading}
            // required
            onChange={(event) => setHeading(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">
          Name:
          <input
            className='listingInput'
            type="text"
            name="name"
            value={name}
            // required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          Address:
          <input
            className='listingInput'
            type="text"
            name="address"
            value={address}
            // required
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="zip">
          Zip:
          <input
          className='listingInput'
            type="text"
            name="zip"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phoneNumber">
          Phone:
          <input
            className='listingInput'
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            // required
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input
            className='listingInput'
            type="text"
            name="email"
            value={email}
            // required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="image">
          Image File:
          <input
            className='listingInput'
            type="text"
            name="image"
            value={image}
            // required
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lat">
          Latitude:
          <input
            className='listingInput'
            type="number"
            name="latitude"
            value={latitude}
            // required
            onChange={(event) => setLatitude(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lng">
          Longitude:
          <input
            className='listingInput'
            type="number"
            name="longitude"
            value={longitude}
            // required
            onChange={(event) => setLongitude(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description:
          <textarea
            className='descriptionInput'
            type="text"
            name="description"
            value={description}
            // required
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div>
      <Button variant="contained" type="submit" name="submit" value="Add New Listing" >Submit</Button>
      </div>
    </form>
    <Button sx={{ m: 2 }}className='back' onClick={() => {history.push('/yourListing')}}variant="contained">Back</Button>
  </div>
    )
}

export default EditPage;