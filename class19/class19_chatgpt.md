# splice()
The `splice()` method is a built-in method in JavaScript used to **add, remove, or replace elements** in an array. It modifies the original array and returns an array of the removed elements.

### Syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

### Parameters:

1. **start** – The index at which to start changing the array.
2. **deleteCount** – The number of elements to remove from the array (starting from `start`).
3. **item1, item2, ...** – Optional. Elements to add to the array starting from the `start` index.

---

### Examples:

#### 1. **Removing elements:**

```javascript
let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(1, 2);  // removes 2 elements starting from index 1
console.log(fruits);  // ["apple", "date"]
```

#### 2. **Adding elements:**

```javascript
let numbers = [1, 2, 5];
numbers.splice(2, 0, 3, 4);  // add 3 and 4 at index 2
console.log(numbers);  // [1, 2, 3, 4, 5]
```

#### 3. **Replacing elements:**

```javascript
let colors = ["red", "blue", "green"];
colors.splice(1, 1, "yellow");  // replace "blue" with "yellow"
console.log(colors);  // ["red", "yellow", "green"]
```

---

### Key Notes:

* It changes the original array.
* Returns the removed elements (as an array).
* If `deleteCount` is 0, no elements are removed.

# sort()
The `sort()` method in JavaScript is used to **sort the elements of an array**. By default, it **converts elements to strings and sorts them in ascending lexicographical (dictionary) order**, which can lead to unexpected results with numbers.

---

### 📌 Syntax:

```javascript
array.sort(compareFunction)
```

* **compareFunction (optional):** A function that defines the sort order. If omitted, elements are sorted as strings.

---

### 🔸 Basic Example (Strings):

```javascript
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);  // ["apple", "banana", "cherry"]
```

---

### 🔸 Basic Example (Numbers – without compare function):

```javascript
let numbers = [10, 2, 30, 1];
numbers.sort();
console.log(numbers);  // [1, 10, 2, 30] — not what you expect!
```

### ✅ Correct Sorting (Numbers – with compare function):

```javascript
let numbers = [10, 2, 30, 1];
numbers.sort((a, b) => a - b);  // ascending order
console.log(numbers);  // [1, 2, 10, 30]
```

* For **descending** order:

```javascript
numbers.sort((a, b) => b - a);
```

---

### 🔹 How `compareFunction` works:

* If the result is **< 0**, `a` comes before `b`.
* If the result is **0**, `a` and `b` stay unchanged.
* If the result is **> 0**, `b` comes before `a`.

---

### 🔸 Sorting Objects:

```javascript
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// Sorted by age: Bob, Alice, Charlie
```

---

Let me know if you want sorting based on strings with locale/language support or advanced sorting!
