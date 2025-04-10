import React from 'react';
import { Link, useLocation } from 'wouter';

const Header: React.FC = () => {
  const [location] = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo">
            Sh<span>oe</span>es
          </Link>
          
          <nav className="nav-desktop">
            <ul>
              <li>
                <Link href="/" className={location === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className={location === '/shop' ? 'active' : ''}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/men" className={location === '/men' ? 'active' : ''}>
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className={location === '/women' ? 'active' : ''}>
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className={location === '/kids' ? 'active' : ''}>
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/blog" className={location === '/blog' ? 'active' : ''}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="nav-actions">
            <button className="action-btn" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <button className="action-btn" aria-label="Wishlist">
              <i className="fas fa-heart"></i>
            </button>
            <button className="action-btn" aria-label="Shopping bag">
              <i className="fas fa-shopping-bag"></i>
            </button>
            <button className="action-btn hamburger" aria-label="Menu">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
