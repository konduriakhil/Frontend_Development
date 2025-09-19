// Parent.jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (childData) => {
    setMessage(childData); // update parent state with child's data
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data from Child: {message}</p>
      <Child sendData={handleDataFromChild} />
    </div>
  );
};

export default Parent;
