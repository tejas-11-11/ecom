import React from 'react';

const AddOnCard = ({ addOn, onSelect }) => {
  return (
    <div className="addon-card">
      <h4>{addOn.name}</h4>
      <p>{addOn.description}</p>
      <p>Price: ${addOn.price}</p>
      <button onClick={() => onSelect(addOn)}>Add</button>
    </div>
  );
};

export default AddOnCard;
