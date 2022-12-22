import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';




function EditPage() {

  const dispatch = useDispatch();  

  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  const editListing = (event) => {
    event.preventDefault();
    console.log('clicked!!!')

    dispatch({
        type: 'ADD_LISTING',
        payload: {
            heading: heading,
            description: description,
            price: price,
            address: address,
            phone_number: phoneNumber,
            email: email,
            image: image,
        }
    })
};

return (
        
    <form className="formPanel" onSubmit={editListing}>
      <h1>Edit Listing</h1>
      <div>
        <label htmlFor="heading">
          Heading:
          <input
            type="text"
            name="heading"
            value={heading}
            // required
            onChange={(event) => setHeading(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            value={description}
            // required
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="price">
          Price:
          <input
            type="text"
            name="price"
            value={price}
            // required
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="address">
          Address:
          <input
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
            type="text"
            name="image"
            value={image}
            // required
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
      </div>
      
      
      <div>
        <input className="btn" type="submit" name="submit" value="Add New Listing" />
      </div>
    </form>
    )
}

export default EditPage;