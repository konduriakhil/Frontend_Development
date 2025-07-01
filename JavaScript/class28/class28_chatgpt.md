```html
"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        .block{
            height: 400px;
            width: 400px;
            background-color: red;
        }
    </style>
</head>
<body>

    <div class="block"></div>
    <script>

    </script>
    
</body>
</html>
```
# why do we declare .block in head section
Great question!

We declare `.block` (or any CSS) inside the `<head>` section for a few **important reasons related to best practices, browser behavior, and performance**:

---

### ✅ Why Declare CSS in the `<head>` Section?

#### 1. **Separation of Structure and Style**

* HTML (structure) and CSS (style) are ideally kept separate.
* By placing CSS in the `<head>`, you apply styles *before* the content is rendered.

#### 2. **Render Blocking / Performance**

* Browsers **read and apply stylesheets before rendering** the body.
* If the styles are in the `<head>`, the browser knows how to style elements **immediately**, preventing a *"flash of unstyled content (FOUC)"*.

#### 3. **Predictable Styling**

* If you define styles after the DOM (like at the bottom of the body), styles might be applied **after** the page is shown briefly without them.
* Putting them in the `<head>` ensures everything looks right **from the start**.

#### 4. **Best Practice / Convention**

* Developers and browsers expect stylesheets (inline or linked) to be in the `<head>`.
* This keeps code **organized**, especially in larger projects.

---

### 🔥 Example Recap

```html
<head>
  <style>
    .block {
      height: 400px;
      width: 400px;
      background-color: red;
    }
  </style>
</head>
```

* This tells the browser: “Hey, when you see a `.block` element in the body, use this style.”

---

### ✅ Alternative: External Stylesheet (Preferred in Real Projects)

**index.html**

```html
<link rel="stylesheet" href="style.css">
```

**style.css**

```css
.block {
  height: 400px;
  width: 400px;
  background-color: red;
}
```

---

Let me know if you want to explore inline styles vs internal vs external!

## what is calss
### 💡 What Is a `class` in HTML and CSS?

A **class** is an **attribute in HTML** that allows you to apply **custom styles or behaviors** to one or more elements using **CSS** or **JavaScript**.

---

### 🧱 In HTML:

A `class` is used like this:

```html
<div class="box"></div>
```

Here, the `div` element has a class named `box`.

---

### 🎨 In CSS:

You define styles for that class with a **dot (`.`)** prefix:

```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
}
```

This tells the browser:
"Every element with `class="box"` should be styled like this."

---

### 🔁 Reusability

You can apply the same class to **multiple elements**, which is very useful:

```html
<div class="box"></div>
<div class="box"></div>
```

Both will have the same style (blue box).

---

### 🧠 Why Use Classes?

* 🔁 **Reuse styles** without repeating code
* 📚 **Organize your design**
* 🎯 **Target specific elements** in CSS or JavaScript
* ⚙️ **Add interactivity** (e.g., animations, events)

---

### ✅ Summary Table

| HTML `class`           | CSS selector | Purpose                                 |
| ---------------------- | ------------ | --------------------------------------- |
| `<div class="alert">`  | `.alert`     | Apply style to elements with this class |
| `<p class="warning">`  | `.warning`   | Add a different style to warnings       |
| `<button class="btn">` | `.btn`       | Style multiple buttons consistently     |

---

If you'd like, I can show you how `class` differs from `id`, or how it's used in JavaScript too!
# keyboard events 
### 💡 What Are Keyboard Events in JavaScript?

**Keyboard events** are special **browser events** that occur when a user interacts with the keyboard — such as **pressing or releasing keys**.

---

### ⌨️ Types of Keyboard Events

| Event                     | Triggered When...                                           | Description                                                 |
| ------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `keydown`                 | A **key is pressed down**                                   | Fires **once** when the key is pressed (even if held).      |
| `keyup`                   | A **key is released**                                       | Fires once when the key is released.                        |
| `keypress` *(deprecated)* | A **key is pressed**, but only for **printable characters** | ❌ Deprecated — don't use it anymore. Use `keydown` instead. |

---

### 🧪 Example: Detect Key Presses

```html
<input type="text" id="inputBox" placeholder="Type here..." />

<script>
  const input = document.getElementById("inputBox");

  input.addEventListener("keydown", (event) => {
    console.log("Key down:", event.key);
  });

  input.addEventListener("keyup", (event) => {
    console.log("Key up:", event.key);
  });
</script>
```

#### 🖥 Output in Console (when typing "A"):

```
Key down: a
Key up: a
```

---

### 🔑 Useful Properties of the `event` Object

| Property                              | Description                                                |
| ------------------------------------- | ---------------------------------------------------------- |
| `event.key`                           | The key value (e.g., `"a"`, `"Enter"`, `"ArrowLeft"`).     |
| `event.code`                          | Physical key on the keyboard (e.g., `"KeyA"`, `"Digit1"`). |
| `event.altKey`, `ctrlKey`, `shiftKey` | Booleans — whether those modifier keys were pressed.       |

---

### 🚨 Common Use Cases

* Shortcuts (e.g., Ctrl+S to save)
* Games (detect arrow keys, spacebar)
* Forms (submit on Enter)
* Accessibility enhancements


