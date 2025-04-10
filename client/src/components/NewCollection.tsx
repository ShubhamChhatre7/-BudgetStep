import React from 'react';
import { newCollectionImage } from '../data/products';

const NewCollection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">See Our New Collection</h2>
        
        <div className="collection-showcase">
          <div className="collection-image">
            <img src={newCollectionImage} alt="New Collection" />
          </div>
          <div className="collection-details">
            <h3 className="collection-title">Urban Street Collection 2023</h3>
            <p className="collection-text">
              Our latest collection brings together the best of street style with premium comfort. 
              Each pair is crafted using sustainable materials and innovative technologies to ensure 
              you look good while feeling great.
            </p>
            <a href="#" className="btn btn-outline">View Collection</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCollection;
