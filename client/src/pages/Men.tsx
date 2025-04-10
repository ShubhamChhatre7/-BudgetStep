import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trendingProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

// Filter to show only men's products (for this demo, we'll use odd IDs as men's)
const menProducts = trendingProducts.filter(product => product.id % 2 === 1);

const Men: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="category-hero men-hero">
          <div className="container">
            <div className="category-hero-content">
              <h1>Men's Collection</h1>
              <p>Discover our range of premium men's footwear designed for style, comfort and performance.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Men's Shoes</h2>
            
            <div className="category-nav">
              <button className="category-btn active">All</button>
              <button className="category-btn">Running</button>
              <button className="category-btn">Casual</button>
              <button className="category-btn">Athletic</button>
              <button className="category-btn">Formal</button>
            </div>
            
            <div className="product-grid">
              {menProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="promo-banner">
          <div className="container">
            <div className="promo-content">
              <h2>New Season, New Style</h2>
              <p>Upgrade your footwear collection with our latest men's releases. Premium materials designed for the modern man.</p>
              <a href="#" className="btn btn-primary">Shop New Arrivals</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Men;