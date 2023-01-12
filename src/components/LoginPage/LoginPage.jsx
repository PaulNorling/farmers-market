import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Login.css'

function LoginPage() {
  const history = useHistory();

  return (
    <div className='login-page'>
      <LoginForm />

      <center>
        <Button
          type="button"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
