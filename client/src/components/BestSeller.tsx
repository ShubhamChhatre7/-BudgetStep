import React from 'react';
import ProductCard from './ProductCard';
import { bestSellerProducts } from '../data/products';

const BestSeller: React.FC = () => {
  return (
    <section className="best-seller section">
      <div className="container">
        <h2 className="section-title">Best Seller</h2>
        
        <div className="product-grid">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
