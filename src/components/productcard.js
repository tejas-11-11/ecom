import React from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => onViewDetails(product)}>View Details</button>
    </div>
  );
};

export default ProductCard;
