In **JavaScript**, **events** refer to **signals or notifications** that something has happened in the **browser** or **DOM (Document Object Model)**, usually as a result of user interaction or a specific action taken by the browser.

---

### 🔹 Common Types of JavaScript Events

| Event Type  | Triggered When...                         | Example                     |
| ----------- | ----------------------------------------- | --------------------------- |
| `click`     | An element is clicked                     | Button click                |
| `mouseover` | Mouse pointer moves over an element       | Hover over an image         |
| `keydown`   | A key is pressed                          | Typing in a text field      |
| `submit`    | A form is submitted                       | Clicking submit on a form   |
| `load`      | The page or resource has finished loading | Image or page load          |
| `resize`    | The browser window is resized             | Resizing the window         |
| `scroll`    | The user scrolls an element or page       | Scrolling a webpage         |
| `change`    | The value of a form input changes         | Selecting a dropdown option |

---

### 🔹 How Events Work

JavaScript uses something called the **Event Listener Model**:
You can **listen** for an event and run a **callback function** when it happens.

```javascript
// Example: Click event on a button
document.getElementById("myButton").addEventListener("click", function() {
  alert("Button was clicked!");
});
```

---

### 🔹 Event Object

When an event occurs, an **event object** is automatically passed to the callback function, containing information about the event:

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key); // Logs the key that was pressed
});
```

---

### 🔹 Summary

In short:

> **Events in JavaScript are actions or occurrences that happen in the system you are programming for, which the system tells you about so your code can respond to them.**

Great! Here's a **visual breakdown** of how **JavaScript events** work using a basic **HTML + JS** example.

---

## ✅ Example: Button Click Event

### 🧱 HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Events Example</title>
</head>
<body>
  <h2>JavaScript Event Example</h2>
  <button id="myButton">Click Me!</button>

  <script>
    // JavaScript goes here
    document.getElementById("myButton").addEventListener("click", function() {
      alert("You clicked the button!");
    });
  </script>
</body>
</html>
```

---

### 🔍 What Happens Here

1. The browser renders a **button**.
2. JavaScript attaches a **click event listener** to the button using:

   ```js
   addEventListener("click", function() { ... });
   ```
3. When the user **clicks** the button, the **event fires**, and the **callback function** runs.
4. A **popup (alert)** appears saying: `You clicked the button!`

---

## 🖱️ More Event Examples

### 1. Mouse Over

```js
element.addEventListener("mouseover", function() {
  console.log("Mouse is over the element");
});
```

### 2. Key Press

```js
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});
```

### 3. Form Submit

```html
<form id="myForm">
  <input type="text" name="name" />
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the page from reloading
    alert("Form submitted!");
  });
</script>
```

---

Would you like an interactive example or a sandbox you can edit live?
```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Events Example</title>
</head>
<body>
  <h2>JavaScript Event Example</h2>

  <button id="myButton">Click Me!</button>
  <button id="mouseover">mouseOver</button>

  <form id="myForm">
    <input type="text" name="name" />
    <button type="submit">Submit</button>
  </form>

  <script>

    
    // JavaScript goes here
    document.getElementById("myButton").addEventListener("click", function() {
      alert("You clicked the button!");
    });
    document.getElementById("mouseover").addEventListener("mouseover", function() {
      alert("Mouse is over the element");
    });

    document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the page from reloading
    alert("Form submitted!");
  });
      </script>
</body>
</html>

```

# Difference between class and id of element
Absolutely — let’s break down **what `class` and `id` mean in HTML**, in a simple and clear way.

---

## ✅ What Is `id`?

* An **`id`** is a **unique name** for one specific HTML element.
* It's like giving a **name tag** to **one person**.

### ✏️ Example:

```html
<h1 id="mainTitle">Welcome</h1>
```

You can access this in JavaScript like:

```js
document.getElementById("mainTitle").style.color = "blue";
```

🟢 Use `id` when you're targeting **only one element** on the page.

---

## ✅ What Is `class`?

* A **`class`** is a **label** you can give to **multiple elements**.
* It's like giving a **uniform** to a group of people — they all share something in common.

### ✏️ Example:

```html
<h1 class="title">Welcome</h1>
<p class="title">This is a paragraph.</p>
```

You can access or style **all elements with that class** using:

#### In CSS:

```css
.title {
  color: red;
}
```

#### In JavaScript:

```js
let titles = document.getElementsByClassName("title");
titles[0].style.display = "none"; // hides the first one
```

🟡 Use `class` when you're styling or controlling **more than one element**.

---

## 🎯 Quick Comparison

| Feature         | `id`                     | `class`                           |
| --------------- | ------------------------ | --------------------------------- |
| Unique?         | ✅ Yes (one element only) | ❌ No (can be reused)              |
| Selector in JS  | `getElementById("id")`   | `getElementsByClassName("class")` |
| Selector in CSS | `#id`                    | `.class`                          |
| Best for...     | One specific thing       | Groups or repeated styling        |

---

### 🧠 Back to Your Example:

```html
<h1 class="title" onclick="welcome()">Click me to hide!</h1>
```

This uses `class="title"`:

* It means this heading has the **class name `title`**.
* You can style or target **other elements** with the same class.

---

Do you want a live example or a playground to test how `class` and `id` behave?
