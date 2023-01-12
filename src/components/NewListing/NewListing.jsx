import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './NewListing.css'




function NewListing() {
  const history = useHistory();

  const dispatch = useDispatch();  

  const [heading, setHeading] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const addListing = (event) => {
    event.preventDefault();
    console.log('clicked!!!')

    dispatch({
        type: 'ADD_LISTING',
        payload: {
            heading: heading,
            name: name,
            address: address,
            zip: zip,
            phone_number: phoneNumber,
            email: email,
            image: image,
            latitude: latitude,
            longitude: longitude,
            description: description,
        }
    })
};

function autoFill() {
  console.log('clicked')
  setHeading('Somerset Farmers Market')
  setName
  setAddress('520 Main St, Somerset, WI ')
  setZip('54025')
  setPhoneNumber('6128029320')
  setEmail('paulnorling87@gmail.com')
  setImage('https://minnesotagrown.com/wp-content/uploads/2018/09/2021.3.3-Submitted-Minneapolis-NE-produce-stand-customer-480x480.jpg')
  setDescription(`Emphasis on sustainability & locally grown produce, specialty foods, baked goods, prepared foods, meat, eggs,
   local arts/craft, cooking demos, live music & kids activities. Handicapped accessible & street parking avail. May 14-Oct 15:
    Sat 9a-1p. FMNP, EBT, Credit/Debit cards accepted. See website for Winter Market information.`)
  setLatitude('45.122629569663864')
  setLongitude('-92.6833753576704')
}

return (
  <div className='new-listing'>
    <form className="addListingForm" onSubmit={addListing}>
      <h1 onClick={autoFill}>New Listing</h1>
      {/* {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )} */}
      <div>
        <label htmlFor="heading">
          Listing Title:
        </label>
        <input
            className='listingInput'
            type="text"
            name="heading"
            value={heading}
            // required
            onChange={(event) => setHeading(event.target.value)}
          />
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
        <Button variant="contained" type="submit" name="submit" value="Add New Listing" >Add New Listing</Button>
      </div>
      
    </form>
        <Button sx={{ m: 2 }} className='back-btn' onClick={() => {history.push('/')}}variant="contained">Back</Button>
    </div>   
    )
}


export default NewListing;