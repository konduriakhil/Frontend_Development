# Pagination

```jsx
import React, { useState, useEffect } from "react";

function ProductsPagination() {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 5;

  useEffect(() => {
    // fetch all products once
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  // Slice products for current page
  const products = allProducts.slice(page * limit, (page + 1) * limit);

  return (
    <div>
      <h2>Product Listing</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>

      <button
        onClick={() => setPage(page + 1)}
        disabled={(page + 1) * limit >= allProducts.length}
      >
        Next Page
      </button>
    </div>
  );
}

export default ProductsPagination;
```

Perfect 👍 Let’s add **pagination meaning** to your short notes so it’s all in one place:

---

## 🔹 Pagination

- **Definition:** Splitting large data into smaller chunks (pages) instead of loading everything at once.
- **Why:** Improves **performance** and **user experience** (faster load, less memory).
- **Example:** Amazon shows 20 products per page → you click **Next Page** to see more.
- **In code:**

  ```js
  const products = allProducts.slice(page * limit, (page + 1) * limit);
  ```

  - `page` = current page number (0-based).
  - `limit` = items per page.
  - Formula picks items for that page.

---

## 🔹 `disabled` Attribute (React/HTML Button)

- Makes a button **unclickable and greyed out**.
- Accepts a **boolean value** (`true` / `false`).
- Example:

  ```jsx
  <button disabled={true}>Next</button>
  ```

- In your pagination:

  ```jsx
  disabled={(page + 1) * limit >= allProducts.length}
  ```

  → Disables **Next Page** button when no more products remain.

---

## 🔹 `slice()` Method (JavaScript Array)

- Used to **extract a portion** of an array without changing the original.
- Syntax: `array.slice(start, end)`

  - `start` = index to begin (inclusive).
  - `end` = index to stop (exclusive).

- Example:

  ```js
  ["a", "b", "c", "d"].slice(1, 3); // ["b","c"]
  ```

- In pagination:

  ```js
  allProducts.slice(page * limit, (page + 1) * limit);
  ```

  - Page 0 → `slice(0, 5)` → first 5 products.
  - Page 1 → `slice(5, 10)` → next 5 products.
  - Page 2 → `slice(10, 15)` → next 5 products.

---

👉 **Summary:**

- **Pagination** = breaking data into pages.
- **slice()** = selects which data to show on the current page.
- **disabled** = prevents clicking when no more pages are left.

---

Would you like me to also prepare a **simple diagram/visual flow** of how pagination works (Page 0 → Page 1 → Page 2) so you can explain it easily in interviews?
