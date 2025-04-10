import React from 'react';
import ProductCard from './ProductCard';
import { trendingProducts } from '../data/products';

const TrendingProducts = () => {
  return (
    <section className="section products-section">
      <div className="container">
        <h2 className="section-title">Trending Products</h2>
        
        <div className="product-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Running</button>
          <button className="filter-btn">Casual</button>
          <button className="filter-btn">Sports</button>
          <button className="filter-btn">Limited</button>
        </div>
        
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="view-all-container">
          <a href="#" className="view-all-btn">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
