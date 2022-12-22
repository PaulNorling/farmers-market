import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';





function EditPage() {

    
    

  const detail = useSelector(store => store.edit)
    
  console.log('editpage', detail)

  //const head = detail[0].heading

  const dispatch = useDispatch();  

  const [heading, setHeading] = useState(detail.item);
  const [description, setDescription] = useState(detail.description);
  const [price, setPrice] = useState(detail.item_price);
  const [address, setAddress] = useState(detail.address);
  const [phoneNumber, setPhoneNumber] = useState(detail.phone_number);
  const [email, setEmail] = useState(detail.email);
  const [image, setImage] = useState(detail.image);

  const editListing = (event) => {
    event.preventDefault();
    console.log('clicked!!!')

    // dispatch({
    //     type: 'ADD_LISTING',
    //     payload: {
    //         heading: heading,
    //         description: description,
    //         price: price,
    //         address: address,
    //         phone_number: phoneNumber,
    //         email: email,
    //         image: image,
    //     }
    // })
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
        <input className="btn" type="submit" name="submit" value="Edit Listing" />
      </div>
    </form>
    )
}

export default EditPage;