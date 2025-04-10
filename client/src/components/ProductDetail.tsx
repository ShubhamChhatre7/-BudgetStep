import React from 'react';

const ProductDetail: React.FC = () => {
  return (
    <section className="product-detail section">
      <div className="container">
        <h2 className="section-title">Details Down To Sneaker Level</h2>
        
        <div className="detail-grid">
          <div className="detail-card">
            <div className="detail-icon">
              <i className="fas fa-shoe-prints"></i>
            </div>
            <h3 className="detail-title">Premium Materials</h3>
            <p className="detail-text">
              We source only the highest quality materials for superior comfort and durability.
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">
              <i className="fas fa-medal"></i>
            </div>
            <h3 className="detail-title">Ergonomic Design</h3>
            <p className="detail-text">
              Each pair is crafted with attention to the natural contours of your feet.
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="detail-title">Eco-Friendly</h3>
            <p className="detail-text">
              Sustainable production methods and materials that respect our environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
