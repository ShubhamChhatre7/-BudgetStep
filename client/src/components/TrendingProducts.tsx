import React from 'react';
import ProductCard from './ProductCard';
import { trendingProducts } from '../data/products';

const TrendingProducts: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Trending Products</h2>
        
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
