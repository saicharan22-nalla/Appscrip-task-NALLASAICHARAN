import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Images.css';

const Images = () => {
  const [products, setProducts] = useState([]);
  const [filtersVisible, setFiltersVisible] = useState(true);

  useEffect(() => {
    
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response.data); 
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>{products.length}</h1>
        <button className="toggle-filters" onClick={() => setFiltersVisible(!filtersVisible)}>
          {filtersVisible ? 'Hide Filter' : 'Show Filter'}
        </button>
        <select className="sort-dropdown">
          <option value="recommended">Recommended</option>
          <option value="newest">Newest First</option>
          <option value="popular">Popular</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
        </select>
      </header>

      <div className="main-content">
        {filtersVisible && (
          <aside className="filters">
            <h2>Filters</h2>
            <div className="filter-group">
              <label>Customizable:</label>
              <ul>
                <li><input type="checkbox" /> Yes</li>
                <li><input type="checkbox" /> No</li>
              </ul>
            </div>
            <div className="filter-group">
              <label>Ideal For:</label>
              <ul>
                <li><input type="checkbox" /> Men</li>
                <li><input type="checkbox" /> Women</li>
                <li><input type="checkbox" /> Baby & Kids</li>
              </ul>
            </div>
            <div className="filter-group">
              <label>Occasion:</label>
              <select>
                <option value="all">All</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="party">Party</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Fabric:</label>
              <select>
                <option value="all">All</option>
                <option value="cotton">Cotton</option>
                <option value="silk">Silk</option>
                <option value="wool">Wool</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Pattern:</label>
              <select>
                <option value="all">All</option>
                <option value="solid">Solid</option>
                <option value="striped">Striped</option>
                <option value="printed">Printed</option>
              </select>
            </div>
          </aside>
        )}

   

        <section className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <p className="product-category" style={{ color: '#555', fontSize: '14px', margin: '5px 0' }}> {product.category}</p>
              <p className="product-rating" style={{ color: '#888', fontSize: '13px', margin: '5px 0' }}>{product.rating.rate} ({product.rating.count} reviews)</p>
              
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Images;
