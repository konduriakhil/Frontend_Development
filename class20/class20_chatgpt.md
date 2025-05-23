
## 🔹 2. **Iteration and Transformation**

### `forEach()`

* Executes a provided function once for each array element.
* Does **not return** anything (undefined).

```js
[1, 2, 3].forEach((num) => console.log(num * 2));
```

### `map()`

* Creates a new array by applying a function to every element.

```js
let result = [1, 2, 3].map(x => x * 2);  // [2, 4, 6]
```

### `filter()`

* Returns a new array containing elements that pass a test.

```js
let evens = [1, 2, 3, 4].filter(x => x % 2 === 0);  // [2, 4]
```

### `reduce()`

* Reduces the array to a single value by applying a function.

```js
let sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);  // 10
```

### `reduceRight()`

* Same as `reduce()` but from **right to left**.

---