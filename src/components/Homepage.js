import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import './HomePage.css'


const Homepage = () => {
  return (
    <div className="homepage-container">
      <main>
        <Carousel />
      </main>
        <Footer />
    </div>
  );
};

export default Homepage;
