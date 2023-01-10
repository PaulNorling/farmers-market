import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import './LandingPage.css';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="landing-page-container">
      <div className='heading-container'>
        <h2>{heading}</h2>
      </div>
      
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <Button variant="contained" onClick={onLogin}>
              Login
            </Button>
          </center>
        </div>
    </div>
  );
}

export default LandingPage;
