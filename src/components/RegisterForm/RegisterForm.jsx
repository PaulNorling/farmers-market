import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zip, setZip] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        zip: zip,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      {/* <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div> */}
      <TextField 
          required
          sx={{ m: 1 }}
          label="Username:" 
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)} 
      />
      {/* <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div> */}
      <TextField 
          type="password"
          required
          sx={{ m: 1 }}
          label="Password:" 
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
      />
      {/* <div>
        <label htmlFor="password">
          Zip:
          <input
            name="zip"
            value={zip}
            required
            onChange={(event) => setZip(event.target.value)}
          />
        </label>
      </div> */}
      <TextField 
          required
          sx={{ m: 1 }}
          label="Zip:" 
          variant="outlined"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
      />
      <div>
        <Button variant="contained" className="btn" type="submit" name="submit" value="Register">
          Register
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
