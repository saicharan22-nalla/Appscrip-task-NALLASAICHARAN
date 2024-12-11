import React from "react";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo">
          <img src="https://res.cloudinary.com/dlfwqynh5/image/upload/v1733896119/Logo_e5kucw.svg" alt="Logo" />
        </div>
        <div className="logo-heading">
          LOGO
        </div>

        <div className="header-icons">
          <FaSearch className="icon" title="Search" />
          <FaHeart className="icon" title="Favorites" />
          <FaUser className="icon" title="User Profile" />
          <FaShoppingCart className="icon" title="Cart" />
          <select id="options" name="options">
      <option value="option1">ENG</option>
      <option value="option2">HIN</option>
      <option value="option3">KAN</option>
      <option value="option4">TEL</option>
    </select>
        </div>
      </header>

      <nav className="nav-container">
        <div className="nav-menu">
          <a href="#shop">Shop</a>
          <a href="#skills">Skills</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
        </div>
        </nav>

        <div className="banner">
        <h1 className="banner-title">DISCOVER OUR PRODUCTS</h1>
        <p className="banner-subtitle">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      </div>
      

  );
};

export default Header;
