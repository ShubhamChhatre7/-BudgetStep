import React from 'react';
import { heroImage } from '../data/products';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="hero-badge">New Season</span>
            </div>
            <h1 className="hero-title">
              Sh<span className="hero-title-highlight">o</span>es
              <span className="hero-title-text">Collect!</span>
            </h1>
            <p className="hero-subtitle">
              Find your perfect pair of shoes and step into style with our premium collection.
            </p>
            <div className="hero-actions">
              <a href="#shop" className="btn btn-primary">
                Shop Now
              </a>
              <div className="scroll-indicator">
                <span>Scroll</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1025&q=80" alt="Premium Sneaker Collection" />
            <div className="hero-image-badge">
              <span className="badge-text">Best Seller</span>
              <span className="badge-price">$129.99</span>
            </div>
          </div>
        </div>
        <div className="scroll-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
