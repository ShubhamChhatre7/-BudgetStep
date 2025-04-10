import React from 'react';
import { heroImage } from '../data/products';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Shoes Collect!</h1>
            <p className="hero-subtitle">
              Discover the perfect pair that combines style, comfort, and innovation for your everyday adventures.
            </p>
            <a href="#" className="btn btn-primary">
              Shop Now
            </a>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Featured Sneaker" />
            <div className="featured-tag">New Arrival</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
