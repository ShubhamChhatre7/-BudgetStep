import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { trendingProducts, bestSellerProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  // Combine all products and remove duplicates
  const allProducts = [...trendingProducts, ...bestSellerProducts]
    .filter((product, index, self) => 
      index === self.findIndex(p => p.id === product.id)
    );

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <h1 className="page-title">Shop All Products</h1>
            
            <div className="shop-filter">
              <div className="filter-group">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" className="filter-select">
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="best-seller">Best Sellers</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="category">Category:</label>
                <select id="category" className="filter-select">
                  <option value="all">All</option>
                  <option value="running">Running</option>
                  <option value="casual">Casual</option>
                  <option value="sports">Sports</option>
                  <option value="lifestyle">Lifestyle</option>
                </select>
              </div>
            </div>
            
            <div className="product-grid">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;