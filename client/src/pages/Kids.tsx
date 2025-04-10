import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trendingProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

// Filter to show only kids products (for this demo, we'll use the first 3 products)
const kidsProducts = trendingProducts.slice(0, 3);

const Kids: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="category-hero kids-hero">
          <div className="container">
            <div className="category-hero-content">
              <h1>Kids' Collection</h1>
              <p>Fun, comfortable and durable shoes designed specifically for growing feet.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Kids' Shoes</h2>
            
            <div className="age-filter">
              <button className="age-btn active">All Ages</button>
              <button className="age-btn">Toddler (1-3)</button>
              <button className="age-btn">Little Kids (4-7)</button>
              <button className="age-btn">Big Kids (8-12)</button>
            </div>
            
            <div className="product-grid">
              {kidsProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="kids-features">
          <div className="container">
            <div className="features-content">
              <h2>Designed for Active Kids</h2>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Extra Durability</h3>
                    <p>Reinforced stitching and materials that can handle playground adventures.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-ruler"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Room to Grow</h3>
                    <p>Designed with growing feet in mind for comfort that lasts longer.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-tint"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Easy to Clean</h3>
                    <p>Materials that can be quickly wiped down after messy adventures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Kids;