import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Carousel from './Carousel';

const Homepage = () => {
  return (
    <div>
      <main>
        <Carousel />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
};

export default Homepage;
