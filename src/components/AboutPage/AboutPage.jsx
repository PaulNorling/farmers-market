import React from 'react';
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-container">
      <div>
        <p>Looking to shop small and support your community?
          Farmer's Marketplace connects consumers with their neighbors,
          making it easy to find and purchase fresh, sustainably grown produce and goods.
          
          Our app simplifies the process of supporting small businesses and eating healthy.
          With Farmer's Marketplace supporting local agriculture and eating healthy has never been easier.
        </p>
      </div>
      <div></div>
      <div>
          <h3>Technologies Used:</h3>
          <div>React</div>
          <div>Node.js</div>
          <div>sweetalert2</div>
          <div>react-google-maps/api</div>
          <div>react-animated-slider</div>
      </div>
      <div>
        <h3>Biggest Challenge</h3>
        <p>Google maps</p>
      </div>
      <div>
        <h3>Next Setps</h3>
        <p>payment options</p>
      </div>
    </div>
  );
}

export default AboutPage;
