```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello node js from http module");
});

const port = 3000;

server.listen(port, () => {
  console.log("server is now listening in 3000 port number");
});
```

## routes.js routing

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is products page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page is not found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log("Server is listening to port 3000");
});
```
