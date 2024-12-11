import React from 'react';
import './Footer.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="subscribe">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettä muse.</p>
            <div className="input-group">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="contact">
            <h2>CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <div className="currency-selector">
              <p>CURRENCY</p>
              <img src='https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900477/United_States_of_America_US_pd7dsk.png' alt='us-img'/>
              <button>USD</button>
            
            </div>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="about">
            <h2>mettä muse</h2>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/artisans">Artisans</a></li>
              <li><a href="/boutiques">Boutiques</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/eu-compliance-docs">EU Compliance Docs</a></li>
            </ul>
          </div>

          <div className="quick-links">
            <h2>QUICK LINKS</h2>
            <ul>
              <li><a href="/orders-shipping">Orders & Shipping</a></li>
              <li><a href="/join-login-seller">Join/Login as a Seller</a></li>
              <li><a href="/payment-pricing">Payment & Pricing</a></li>
              <li><a href="/return-refunds">Return & Refunds</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="follow-us">
            <h2>FOLLOW US</h2>
            <ul className="social-icons">
              <li><i className="fab fa-instagram"><FaInstagram /></i></li>
              <li><i className="fab fa-facebook-f"><FaLinkedin/></i></li>
            </ul>
            <div className="payment-methods">
              <p>mettä muse ACCEPTS</p>
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900882/Screenshot_2024-12-11_123653_o4ugvf.png" alt="Google Pay" />
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900880/Screenshot_2024-12-11_123704_qivkcz.png" alt="Apple Pay" />
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900880/Screenshot_2024-12-11_123720_b0vpjs.png" alt="Visa" />
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733901104/Screenshot_2024-12-11_124023_jswbp5.png"alt="Mastercard" />
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900880/Screenshot_2024-12-11_123730_i89hze.png" alt="American Express" />
              <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733900880/Screenshot_2024-12-11_123744_fdqsic.png" alt="PayPal" />
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright © 2023 mettä muse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;