import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo and About */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">PS Shop</h5>
            <p>
              PS Shop offers the best deals and a wide range of products for all your shopping
              needs. Experience the best online shopping with us.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link  to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i>123 PS Shop Street, City, Country
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i>(+123) 456-7890
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i>support@psshop.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} PS Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

