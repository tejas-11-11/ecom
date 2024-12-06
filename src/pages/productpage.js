import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import AddOnCard from '../components/AddOnCard';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addOns, setAddOns] = useState([]);

  useEffect(() => {
    api.get(`/products/${id}/`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));

    api.get(`/addons/${id}/`)
      .then(response => setAddOns(response.data))
      .catch(error => console.error('Error fetching add-ons:', error));
  }, [id]);

  const handleAddToCart = () => {
    // Logic to add product and selected add-ons to cart
  };

  return (
    <div className="product-page">
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <h2>Add-ons</h2>
          <div className="addons-list">
            {addOns.map(addOn => (
              <AddOnCard key={addOn.id} addOn={addOn} onSelect={() => console.log(addOn)} />
            ))}
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductPage;
