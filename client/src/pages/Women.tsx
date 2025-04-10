import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { bestSellerProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

// Filter to show only women's products (for this demo, we'll use even IDs as women's)
const womenProducts = bestSellerProducts.filter(product => product.id % 2 === 0);

const Women: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="category-hero women-hero">
          <div className="container">
            <div className="category-hero-content">
              <h1>Women's Collection</h1>
              <p>Elevate your style with our curated selection of women's footwear, blending fashion with functionality.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Women's Shoes</h2>
            
            <div className="category-nav">
              <button className="category-btn active">All</button>
              <button className="category-btn">Lifestyle</button>
              <button className="category-btn">Running</button>
              <button className="category-btn">Training</button>
              <button className="category-btn">Sandals</button>
            </div>
            
            <div className="product-grid">
              {womenProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="feature-banner">
          <div className="container">
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h3>Premium Design</h3>
                <p>Crafted with attention to detail and style that stands out.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-feather-alt"></i>
                </div>
                <h3>Lightweight Comfort</h3>
                <p>Engineered to feel like walking on clouds all day long.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Customer Favorites</h3>
                <p>Consistently top-rated by our satisfied customers.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Women;