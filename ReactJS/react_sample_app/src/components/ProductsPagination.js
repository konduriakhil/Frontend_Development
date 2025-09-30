import React, { useState, useEffect } from "react";

function ProductsPagination() {
      const [allProducts, setAllProducts] = useState([]);
      const [page, setPage] = useState(0);
      const limit = 5;

      useEffect(() => {
            // fetch all products once
            fetch("https://fakestoreapi.com/products")
                  .then(res => res.json())
                  .then(data => setAllProducts(data));
      }, []);

      // Slice products for current page
      const products = allProducts.slice(page * limit, (page + 1) * limit);

      return (
            <div>
                  <h2>Product Listing</h2>
                  <ul>
                        {products.map(p => (
                              <li key={p.id}>{p.title}</li>
                        ))}
                  </ul>

                  <button
                        onClick={() => setPage(page + 1)}
                        disabled={(page + 1) * limit >= allProducts.length}>
                        Next Page
                  </button>
            </div>
      );
}

export default ProductsPagination;
