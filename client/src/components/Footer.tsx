import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Shoees</div>
            <p className="footer-about">
              We are dedicated to providing high-quality, stylish footwear that combines 
              comfort, durability, and the latest design trends.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">Help</h4>
            <ul className="footer-links">
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="footer-heading">About</h4>
            <ul className="footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Corporate Responsibility</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Shoees. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
