import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './EditPage.css'


function EditPage() {

  const params = useParams();

  const history = useHistory();

  const detail = useSelector(store => store.edit)
    
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
      <TextField 
          fullWidth 
          sx={{ m: 1 }}
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
      <Button variant="contained" type="submit" name="submit" value="Add New Listing" >Submit</Button>
      </div>
    </form>
    <Button sx={{ m: 2 }}className='back' onClick={() => {history.push('/yourListing')}}variant="contained">Back</Button>
  </div>
    )
}

export default EditPage;