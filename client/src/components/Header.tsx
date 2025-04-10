import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Header: React.FC = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
            <button 
              className="action-btn hamburger" 
              aria-label="Menu" 
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
            >
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link 
                  href="/" 
                  className={location === '/' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className={location === '/shop' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/men" 
                  className={location === '/men' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Men
                </Link>
              </li>
              <li>
                <Link 
                  href="/women" 
                  className={location === '/women' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Women
                </Link>
              </li>
              <li>
                <Link 
                  href="/kids" 
                  className={location === '/kids' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={location === '/blog' ? 'active' : ''} 
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
