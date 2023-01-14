import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
        },
       //callback : () => history.push('/'),
       history: history 
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
  setDescription(`The Somerset Farmers Market & Craft is Open every Thursday Night from 3:00pm-7:00pm from May 24th - October 25th. The Market is held in the grassy area next to Apple River Liquor on Main street in Somerset Wisconsin. The Market offers a very diverse verity of products that are locally grown and produced using natural practices. The products offered include fresh local produce, handmade crafts, baked goods and breakfast foods as well as trees and potted plants.`)
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
      
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Listing Title:" 
          variant="outlined"
          value={heading}
          onChange={(event) => setHeading(event.target.value)} 
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Name:" 
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Address:" 
          variant="outlined"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Zip:" 
          variant="outlined"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="PhoneNumber:" 
          variant="outlined"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Email:" 
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Image File:" 
          variant="outlined"
          value={image}
          onChange={(event) => setImage(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Latitude:" 
          variant="outlined"
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Longitude:" 
          variant="outlined"
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
      />
      <TextField 
          fullWidth sx={{ m: 1 }}
          label="Description:" 
          variant="outlined"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          multiline
      />
      <div>
        <Button variant="contained" type="submit" name="submit" value="Add New Listing" >Add New Listing</Button>
      </div>
      
    </form>
        <Button sx={{ m: 2 }} className='back-btn' onClick={() => {history.push('/')}}variant="contained">Back</Button>
    </div>   
    )
}


export default NewListing;