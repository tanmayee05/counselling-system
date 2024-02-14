import React, { useState } from 'react';

{/*const ProductCard = ({ initialCount = 0 }) => {
  Use the useState hook to manage the count state
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
       Add buttons to increment and decrement the count 
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <p>Count: {count}</p>
    {count < 0 && <p style={{ color: 'red' }}>Count cannot be negative!</p>}
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>

    // Inside the Counter component

return (
  <div>
    <p>Count: {count}</p>
    {count < 0 && <p style={{ color: 'red' }}>Count cannot be negative!</p>}
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <button onClick={() => setCount(initialCount)}>Reset</button>
  </div>
);

    </div>
  );
};*/}





const ProductCard = ({ productName, price, discount = 0, imageUrl, description }) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', maxWidth: '300px' }}>
      <img src={imageUrl} alt={productName} style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '5px' }} />
      <h2 style={{ marginTop: '10px' }}>{productName}</h2>
      <p><strong>Price:</strong> ${price}</p>
      {discount > 0 && <p><strong>Discounted Price:</strong> ${discountedPrice}</p>}
      <p>{description}</p>
      <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '3px', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};



export default ProductCard;
