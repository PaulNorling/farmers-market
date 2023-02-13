import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; 

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      
      <TextField 
          required
          sx={{ m: 1 }}
          label="Username:" 
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
      />
      <TextField 
          type="password"
          required
          sx={{ m: 1 }}
          label="Password:" 
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <Button variant="contained" className="btn" type="submit" name="submit" value="Log In">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
