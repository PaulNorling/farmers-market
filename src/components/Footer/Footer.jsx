import React from 'react';
import './Footer.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer>
      <div className='media-icons'>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-pinterest"></a>
      </div>
      <div>
        &copy; Farmers Marketplace
      </div>
    </footer>
  )
  
}

export default Footer; 
<div copywrite-name>
    &copy; Farmers Marketplace
</div>