import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>"Looking to shop small and support your community? Our farmers market app connects consumers with local farmers and producers, making it easy to find and purchase fresh, sustainably grown produce and goods. With features like , our app simplifies the process of supporting small businesses and eating healthily. Plus, by shopping at a farmers market, you'll be reducing your carbon footprint and supporting your community. Try it out and discover the benefits of buying local!"</p>
      </div>
    </div>
  );
}

export default AboutPage;
