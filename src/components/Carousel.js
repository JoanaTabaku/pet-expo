import React, { useState } from "react";
import "./Carousel.css"; // Import CSS file for styling (create this file if it doesn't exist)

// Importing images
import image1 from "../images/cat.jpg";
import image2 from "../images/bird.jpg";
import image3 from "../images/dog.jpg";

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left-arrow">&#10094;</button>
      <div className="slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button onClick={nextSlide} className="arrow right-arrow">&#10095;</button>
    </div>
  );
};

export default Carousel;
