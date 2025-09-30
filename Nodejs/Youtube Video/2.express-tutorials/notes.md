## Install Express first through below commands
```sh
npm init -y
npm install express
```
---


## **What is Express.js?**

**Express.js** (or just **Express**) is a **fast, minimal, and flexible web application framework for Node.js**.

* It sits **on top of Node.js’s HTTP module** and makes building web servers and APIs much easier.
* Instead of writing a lot of boilerplate code with `http.createServer()`, you can use Express to handle routes, middleware, and responses in a clean way.

---

## **Why use Express.js?**

* **Simplifies server creation** → Less code compared to raw Node.js.
* **Routing system** → Easily handle different URLs (like `/`, `/about`, `/users`).
* **Middleware support** → Plug in functions for logging, authentication, error handling, etc.
* **REST APIs made easy** → Popular for building APIs for frontend apps (React, Angular, etc.).
* **Huge ecosystem** → Lots of third-party middleware and plugins.

---

## **Basic Example: Node.js without Express**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Akhil!');
  }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

👉 This works, but as routes grow, it becomes messy.

---

## **Same Example with Express.js**

```js
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Akhil!');
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

👉 Much cleaner! Express handles the request/response cycle for you.

---

## **Features of Express.js**

1. **Routing** – Handle GET, POST, PUT, DELETE easily.

   ```js
   app.post('/login', (req, res) => res.send('Login API'));
   ```

2. **Middleware** – Functions that run before the final response (e.g., authentication, logging).

   ```js
   app.use((req, res, next) => {
     console.log(`${req.method} ${req.url}`);
     next(); // pass to next middleware
   });
   ```

3. **Serving static files** – Like images, CSS, JS.

   ```js
   app.use(express.static('public'));
   ```

4. **Integration with databases** – Works with MongoDB, MySQL, PostgreSQL, etc.

---

## **Where Express.js is used**

* **REST APIs** for frontend apps (React, Angular, Vue).
* **Backend services** in microservices architecture.
* **Full-stack apps** (like MERN: MongoDB, Express, React, Node).

---

✅ **In short:**
Express.js is a **popular Node.js framework** that makes building web servers and APIs **simpler, faster, and more organized**.

---

