```js
function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise lecture starts");
delayFn(2000).then(() => console.log("After 2 seconds promise resolved"));
console.log("end");
```

---

## 🔹 What is `resolve`?

- Think of a **Promise** like an **empty box** that will be filled later.
- `resolve` is a **button** JavaScript gives you to say:
  👉 “Okay, the box is now filled, the promise is done!”

When you call `resolve()`, you are telling JavaScript:
✅ “This promise is finished successfully, now run the `.then()` attached to it.”

---

## 🔹 What Happens in Your Code

1. `console.log('Promise lecture starts');`
   👉 Immediately prints:

   ```
   Promise lecture starts
   ```

2. `delayFn(2000)` is called.

   - A Promise is created.
   - Inside it:

     ```js
     setTimeout(resolve, 2000);
     ```

     means: "Wait 2 seconds, then press the **resolve button**."

3. `console.log('end');`
   👉 Immediately prints:

   ```
   end
   ```

   (because promises don’t block the program — they run asynchronously).

4. After 2 seconds → `setTimeout` runs `resolve()`.

   - This marks the Promise as **finished**.
   - The `.then(() => console.log(...))` is now executed.
     👉 Prints:

   ```
   After 2 seconds promise resolved
   ```

---

## 🔹 Output Order

```
Promise lecture starts
end
After 2 seconds promise resolved
```

---

## 🔹 Why does `resolve` look repeated?

- `new Promise((resolve) => {...})` → gives you a special function named `resolve`.
- `setTimeout(resolve, time)` → we hand over that same function to `setTimeout`.
- After the timer, `setTimeout` calls it → promise is finished → `.then()` runs.

It’s like:

- You borrow a **remote control** (resolve).
- You give it to `setTimeout`.
- After 2 seconds, `setTimeout` **presses the button** on the remote.
- The TV (Promise) says: “Done! Play `.then()` now.”

---

```jsx
function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise lecture starts");
delayFn(2000).then(() => console.log("After 2 seconds promise resolved"));
console.log(" end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Second number can not be zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(20, 20)
  .then((data) => {
    console.log("Output: ", data);
  })
  .catch((error) => {
    console.log("Error Occured", error.message);
  });
```
