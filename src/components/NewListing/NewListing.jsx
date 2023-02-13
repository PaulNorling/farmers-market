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
       history: history 
    })
};

function autoFill() {
  setHeading('')
  setName('Paul Norling')
  setAddress('476 208th ave. Somerset, WI ')
  setZip('54025')
  setPhoneNumber('6128029320')
  setEmail('paulnorling87@gmail.com')
  setImage('https://upload.wikimedia.org/wikipedia/commons/2/2b/Rheum_rhabarbarum.2006-04-27.uellue.jpg')
  setDescription(`We are growing rhubarb again this year. May thru june stop by! `)
  setLatitude('45.16178888391066')
  setLongitude('-92.71743245818416')
}

return (
  <div className='new-listing'>
    <form className="addListingForm" onSubmit={addListing}>
      <h1 onClick={autoFill}>New Listing</h1>
      
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
          label="Image Link:" 
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