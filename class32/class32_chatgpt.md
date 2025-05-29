In JavaScript, **event listeners** are functions that wait for specific **events** to happen on HTML elements (like a button click, a key press, mouse movement, etc.) and then execute a callback function when that event occurs.

### Basic Syntax

```javascript
element.addEventListener("event", function);
```

* `element`: The HTML element you're targeting.
* `"event"`: The type of event you're listening for (e.g., `"click"`, `"mouseover"`, `"keydown"`).
* `function`: The callback function to run when the event occurs.

### Example

```html
<button id="myBtn">Click me</button>

<script>
  const button = document.getElementById("myBtn");

  button.addEventListener("click", function() {
    alert("Button was clicked!");
  });
</script>
```

In this example:

* The event is `"click"`.
* The listener waits for the click on the button.
* When clicked, it triggers the `alert()` function.

### Why Use `addEventListener()`?

* You can attach multiple listeners to the same element.
* It's more flexible than using inline event handlers (like `onclick="..."`).
* It supports options like event bubbling, capturing, and removal.

Let me know if you'd like to see more advanced uses or how to remove an event listener.
# what is mean by event bubbling and event capturing
**Event bubbling** and **event capturing** are two phases in the event propagation model in the browser's Document Object Model (DOM). They determine how events travel through the DOM tree when an event occurs.

---

### ✅ Event Bubbling

**Definition**: Event bubbling means the event starts at the **target element** and then **bubbles up** (propagates) to the **parent elements**, up to the root.

**Example**:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
</script>
```

**Output when button is clicked**:

```
Child clicked
Parent clicked
```

---

### ✅ Event Capturing (a.k.a. "Trickling")

**Definition**: Event capturing means the event starts at the **root** and goes **down to the target element**.

To enable capturing, you must explicitly set the third parameter in `addEventListener` to `true`.

**Example**:

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}, true);  // <--- enable capturing

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
}, true);
```

**Output when button is clicked**:

```
Parent clicked
Child clicked
```

---

### 🔄 Summary

| Feature          | Event Capturing                         | Event Bubbling                 |
| ---------------- | --------------------------------------- | ------------------------------ |
| Direction        | Root → Target                           | Target → Root                  |
| Default Behavior | Not by default                          | Yes, default phase             |
| Config in JS     | `addEventListener(..., true)`           | `addEventListener(..., false)` |
| Control Flow     | Can be stopped with `stopPropagation()` |                                |

---
