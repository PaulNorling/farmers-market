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
  //const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  
  const addListing = (event) => {
    event.preventDefault();
    console.log('clicked!!!')

    dispatch({
        type: 'ADD_LISTING',
        payload: {
            heading: heading,
            name: name,
            address: address,
            phone_number: phoneNumber,
            email: email,
            image: image,
            description: description,
        }
    })
};

return (
  <div className='new-listing'>
    <form className="addListingForm" onSubmit={addListing}>
      <h1>New Listing</h1>
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
      {/* <div>
        <label htmlFor="price">
          Price:
          <input
            type="text"
            name="price"
            value={price}
            required
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
      </div> */}
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