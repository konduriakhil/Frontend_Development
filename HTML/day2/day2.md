Excellent! Let’s begin **Day 4: Lists and Tables in HTML**. These are essential for organizing and presenting data clearly on your web pages.

---

## 📝 **Part 1: Lists**

HTML supports **two main types** of lists:

### 1. **Unordered List (`<ul>`)**

Used for bullet points.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

#### Output:

* HTML
* CSS
* JavaScript

---

### 2. **Ordered List (`<ol>`)**

Used for numbered steps.

```html
<ol>
  <li>Wake up</li>
  <li>Brush your teeth</li>
  <li>Start learning HTML</li>
</ol>
```

#### Output:

1. Wake up
2. Brush your teeth
3. Start learning HTML

---

### 🧠 Notes:

* `<ul>` = unordered list (bullets)
* `<ol>` = ordered list (numbers)
* `<li>` = list item (inside both types)

---

## 📊 **Part 2: Tables**

Tables are used to show **tabular data** in rows and columns.

### 🧱 Basic Table Structure:

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Akhil</td>
    <td>22</td>
  </tr>
  <tr>
    <td>Priya</td>
    <td>20</td>
  </tr>
</table>
```

#### Output:

| Name  | Age |
| ----- | --- |
| Akhil | 22  |
| Priya | 20  |

---

### 💡 Tags to Remember:

| Tag       | Meaning                        |
| --------- | ------------------------------ |
| `<table>` | Creates a table                |
| `<tr>`    | Table row                      |
| `<th>`    | Table header (bold + centered) |
| `<td>`    | Table data (cell)              |

---

### ✅ Practice Task:

Try this on your own page:

1. Create a **list** of your favorite movies.
2. Create a **table** with 3 rows: Name, Age, and Country.

Let me know if you want me to help you write the code — or review your version!
```html
<!DOCTYPE html>
<head>
    <title>Lists and Tables</title>
</head>
<body>

    <h3>Top 3 Favorite Movies in Unordered List</h3>
    <ul>
        <li>3 Idiots</li>
        <li>Papplion</li>
        <li>Raghuvaran BTech</li>
    </ul>
    <h3>Top 3 Favorite Movies in Ordered List</h3>
    <ol>
        <li>3 Idiots</li>
        <li>Papplion</li>
        <li>Raghuvaran BTech</li>
    </ol>
    <h3>Table Creation</h3>
    <table border="1">        
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Akhil</td>
            <td>28</td>
            <td>India</td>
        </tr>
        <tr>
            <td>Aashrith</td>
            <td>14</td>
            <td>USA</td>
        </tr>
        <tr>
            <td>Aarush</td>
            <td>10</td>
            <td>Singapoor</td>
        </tr>
    </table>
    <img src="https://i.pinimg.com/736x/85/5a/06/855a0687ca76f2e25802ca865247759e.jpg" alt="Rama Image">
    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Flord-rama--51017408273122448%2F&psig=AOvVaw35JqYoK18dibA9FL3MKe0_&ust=1750498855467000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPi778ba_40DFQAAAAAdAAAAABAL" target="_blank"> Image Link address</a>

</body>
</html>
```