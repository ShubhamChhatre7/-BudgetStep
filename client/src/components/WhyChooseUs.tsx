import React from 'react';
import { personImage } from '../data/products';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose section">
      <div className="container">
        <h2 className="section-title">Why Choose Us?</h2>
        
        <div className="why-choose-grid">
          <div className="person-image">
            <img src={personImage} alt="Customer with our shoes" />
          </div>
          
          <div className="why-choose-content">
            <h3 className="why-choose-title">Comfort Meets Style</h3>
            <p className="why-choose-text">
              We believe that you shouldn't have to choose between looking good and feeling comfortable. 
              Our shoes are designed with both style and wearability in mind, so you can confidently 
              tackle whatever the day brings.
            </p>
            <p className="why-choose-text">
              With innovative cushioning technology, breathable materials, and fashion-forward designs, 
              our footwear collection offers the perfect balance of form and function.
            </p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
