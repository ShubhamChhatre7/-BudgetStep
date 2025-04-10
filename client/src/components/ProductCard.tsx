import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">
          <span className="price">${product.price.toFixed(2)}</span>
          <button 
            className={`wishlist-btn ${isWishlist ? 'active' : ''}`} 
            onClick={toggleWishlist}
            aria-label={isWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <i className={isWishlist ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
        </div>
      </div>
      {product.isNew && <div className="badge">New</div>}
      {product.isBestSeller && <div className="badge best-seller">Best Seller</div>}
      <div className="add-to-cart">Add to Cart</div>
    </div>
  );
};

export default ProductCard;
