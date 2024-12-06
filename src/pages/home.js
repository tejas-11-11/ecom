import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleViewDetails = (product) => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div className="home">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default Home;
