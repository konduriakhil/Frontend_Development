// Child.jsx
import React from 'react';

const Child = ({ sendData }) => {
  const handleClick = () => {
    sendData("Hello from Child!"); // calling parent's function
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
