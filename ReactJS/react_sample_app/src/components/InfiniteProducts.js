import React, { useState, useEffect } from "react";

function InfiniteProducts() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); // items shown at first

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

    if (bottom) {
      setVisibleCount(prev => {
        const nextCount = prev + 5;
        return nextCount > products.length ? products.length : nextCount;
      });
    }
  };

  return (
    <div
      style={{ height: "300px", overflow: "auto", border: "1px solid black" }}
      onScroll={handleScroll}
    >
      <h2>Infinite Scroll Products</h2>
      <ul>
        {products.slice(0, visibleCount).map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default InfiniteProducts;
