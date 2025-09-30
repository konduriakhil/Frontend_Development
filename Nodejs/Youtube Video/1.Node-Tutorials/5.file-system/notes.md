```js
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync();
```

```js
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello from Node JS");
```

```js
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello from Node JS");
console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", readContentFromFile);
```

```js
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
console.log(dataFolder);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello from Node JS");
console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is new line added to that file");
console.log("New content added");

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js ", (err) => {
  if (err) throw err;
  console.log("Async file is created Successfully");
});
```
