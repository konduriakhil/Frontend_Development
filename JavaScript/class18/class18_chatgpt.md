JavaScript arrays are powerful data structures that come with a variety of built-in methods to manipulate and interact with data. Here's a **detailed explanation of the most commonly used JavaScript array methods**, grouped by their functionality:

---

## 🔹 1. **Adding and Removing Elements**

### `push()`

* **Adds** one or more elements to the **end** of an array.
* **Returns** the new length of the array.

```js
let arr = [1, 2];
arr.push(3);  // [1, 2, 3]
```

### `pop()`

* **Removes** the last element from an array.
* **Returns** the removed element.

```js
let arr = [1, 2, 3];
arr.pop();  // 3, arr becomes [1, 2]
```

### `unshift()`

* **Adds** one or more elements to the **beginning** of an array.
* **Returns** the new length.

```js
let arr = [2, 3];
arr.unshift(1);  // [1, 2, 3]
```

### `shift()`

* **Removes** the first element of an array.
* **Returns** the removed element.

```js
let arr = [1, 2, 3];
arr.shift();  // 1, arr becomes [2, 3]
```

---

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

## 🔹 3. **Searching and Testing**

### `includes()`

* Checks if the array contains a certain element.

```js
[1, 2, 3].includes(2);  // true
```

### `indexOf()`

* Returns the first index of an element (or -1 if not found).

```js
[1, 2, 3, 2].indexOf(2);  // 1
```

### `lastIndexOf()`

* Returns the **last** index of a specified element.

### `find()`

* Returns the **first element** that satisfies the condition.

```js
[1, 2, 3, 4].find(x => x > 2);  // 3
```

### `findIndex()`

* Returns the **index** of the first element that satisfies the condition.

### `some()`

* Returns `true` if **at least one** element passes the test.

```js
[1, 2, 3].some(x => x > 2);  // true
```

### `every()`

* Returns `true` if **all** elements pass the test.

---

## 🔹 4. **Modifying / Slicing**

### `slice(start, end)`

* Returns a **shallow copy** of a portion of an array.

```js
[1, 2, 3, 4].slice(1, 3);  // [2, 3]
```

### `splice(start, deleteCount, item1, item2, …)`

* Changes contents by **removing or replacing** elements.

```js
let arr = [1, 2, 3];
arr.splice(1, 1, 99);  // [1, 99, 3]
```

---

## 🔹 5. **Sorting and Reversing**

### `sort()`

* Sorts elements **in-place** (modifies original array).

```js
[3, 1, 2].sort();  // [1, 2, 3]
```

⚠️ Use a compare function for numeric sorting:

```js
[10, 2].sort((a, b) => a - b);  // [2, 10]
```

### `reverse()`

* Reverses the array **in-place**.

---

## 🔹 6. **Combining and Joining**

### `concat()`

* Merges arrays and returns a **new array**.

```js
[1, 2].concat([3, 4]);  // [1, 2, 3, 4]
```

### `join(separator)`

* Joins all elements into a string with a separator.

```js
[1, 2, 3].join('-');  // "1-2-3"
```

---

## 🔹 7. **Other Useful Methods**

### `flat(depth)`

* Flattens nested arrays up to a specified depth.

```js
[1, [2, [3]]].flat(2);  // [1, 2, 3]
```

### `flatMap()`

* Combines `map()` followed by `flat(1)`.

### `Array.isArray(obj)`

* Checks if a variable is an array.

---

## 🔹 Bonus: Creating Arrays

### `Array.from()`

* Creates an array from an iterable or array-like object.

```js
Array.from('abc');  // ['a', 'b', 'c']
```

### `Array.of()`

* Creates an array from the given arguments.

```js
Array.of(1, 2, 3);  // [1, 2, 3]
```

---

Would you like examples or use-cases for any specific methods or groups (e.g., sorting, filtering)?
