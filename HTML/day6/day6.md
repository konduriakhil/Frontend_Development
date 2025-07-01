Absolutely! Let’s go **step by step** to understand **Semantic HTML**.

---

## ✅ Step 1: What is Semantic HTML?

**Semantic HTML** means using HTML tags that **clearly describe the purpose** of the content inside them.

Compare this:

```html
<div>Menu</div>
<div>Article</div>
```

With this:

```html
<nav>Menu</nav>
<article>Article</article>
```

The second one is semantic — the browser and developers know what each section *means*.

---

## ✅ Step 2: Basic Semantic Tags (With Meanings)

| Tag         | Use for...                                    | Like a...          |
| ----------- | --------------------------------------------- | ------------------ |
| `<header>`  | Top section of a page or part (logo, nav)     | Top banner         |
| `<nav>`     | Navigation links                              | Menu bar           |
| `<main>`    | Main content of the page                      | Main body          |
| `<section>` | A group of related content                    | Chapter or section |
| `<article>` | A self-contained piece like a blog post       | Newspaper article  |
| `<aside>`   | Extra content like a sidebar                  | Sidebar box        |
| `<footer>`  | Bottom of the page or section (contact, etc.) | Footer             |

---

## ✅ Step 3: Building a Simple Page

Let’s build it **one piece at a time**.

---

### 🧩 Part 1: Header with Navigation

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
```

🔹 **`<header>`** holds the page title and nav bar.
🔹 **`<nav>`** holds your menu links.

✅ Try typing this into an HTML file and open it in the browser.
Do you want me to give you the full template?

---

If this part is clear, we’ll go to Part 2: `<main>` and `<article>`.
Shall we continue?
Great! Let's continue step by step. You’ve already done **Part 1 (Header with Navigation)**. Now we move on to:

---

## ✅ Part 2: `<main>` and `<article>`

We use:

* **`<main>`** to wrap the most important part of your page — the content.
* **`<article>`** to hold something that can stand alone, like a blog post, news post, or card.

---

### 🔧 Example Code for Main & Article:

```html
<main>
  <article>
    <h2>Welcome to My Website</h2>
    <p>This is a simple website built with semantic HTML. Semantic tags make code easier to understand.</p>
  </article>
</main>
```

✅ Add this **after the `</header>`** in your file.

---

## ✅ Part 3: `<aside>` — A Sidebar or Extra Info

Use `<aside>` to show related links, ads, or tips that are not part of the main article.

---

### 🔧 Example Code for Aside:

```html
<aside>
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#">HTML Tutorial</a></li>
    <li><a href="#">CSS Guide</a></li>
  </ul>
</aside>
```

✅ You can place this **below the `<main>`** section or next to it using CSS later.

---

## ✅ Part 4: `<footer>` — The Bottom of the Page

This usually contains copyright info, contact links, or a closing note.

---

### 🔧 Example Code for Footer:

```html
<footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
</footer>
```

✅ Place this at the **very bottom** of your page.

---

## ✅ Full Working Example (All Together)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML Example</title>
</head>
<body>

  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Welcome to My Website</h2>
      <p>This is a simple website built with semantic HTML. Semantic tags make code easier to understand.</p>
    </article>
  </main>

  <aside>
    <h3>Quick Links</h3>
    <ul>
      <li><a href="#">HTML Tutorial</a></li>
      <li><a href="#">CSS Guide</a></li>
    </ul>
  </aside>

  <footer>
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

Would you like a **mini task** now to practice building your own layout using these tags?
Awesome! Let's do a **mini task** to practice Semantic HTML. 🎯

---

## 🛠️ Mini Task: Create a Simple Blog Post Page

### 🧾 Your Goal:

Create a webpage with the following structure using **semantic HTML tags only**:

---

### ✅ Structure You Need to Build:

1. **Header**

   * Page title: "My Blog"
   * Navigation with links: Home, Articles, Contact

2. **Main Content**

   * One **`<article>`** with:

     * Title: "Why Semantic HTML Matters"
     * A paragraph explaining that semantic HTML makes pages more readable and accessible.
     * A second paragraph about how it helps with SEO and screen readers.

3. **Aside**

   * Heading: "More Topics"
   * A list of 2 links: "HTML Forms", "CSS Basics"

4. **Footer**

   * Text: "© 2025 My Blog – All rights reserved."

---

### 💡 Hints:

* Use: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<ul>`, `<li>`, `<a>`, `<p>`, and headings like `<h1>`, `<h2>`, etc.
* Don’t use `<div>` or `<span>` — focus only on **semantic tags**.

---

Would you like:

1. To try it on your own and send your code for feedback?
2. Or for me to build it together with you line by line like before?

Your choice!
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating Blog through Semantic HTML</title>
</head>
<body>

    <header>
        <h1>My Blog</h1>
        <a href="#">Home</a>
        <a href="#">Articles</a>
        <a href="#">Contact</a>
    </header>

    <main>
        <article>
            <h2>Why Semantic HTML matters</h2>
            <p>Accessibility: Semantic HTML elements help in describing their meaning in a way that's readable by humans and machines. The exact and proper use of HTML semantic tags will allow the users to understand your content better.</p>
            <p>Optimized headers, alongside other semantic HTML elements and clear content structure, are crucial for both SEO and screen reader accessibility. Screen readers use these elements to navigate and understand website content, providing users with a structured and efficient browsing experience. Search engines also leverage this structure to crawl, index, and rank web pages, making well-structured content more discoverable and relevant in search results</p>            
        </article>
    </main>

    <aside>
        <h2>More Topics</h2>
        <a href="#">HTML Forms</a>
        <a href="#">CSS Basics</a>        
    </aside>

    <footer>
        <p>&copy; 2025 My Blog - All rights reserved</p>
    </footer>
    
</body>
</html>
```
# Awesome! Let's do a **mini task** to practice Semantic HTML. 🎯

---

## 🛠️ Mini Task: Create a Simple Blog Post Page

### 🧾 Your Goal:

Create a webpage with the following structure using **semantic HTML tags only**:

---

### ✅ Structure You Need to Build:

1. **Header**

   * Page title: "My Blog"
   * Navigation with links: Home, Articles, Contact

2. **Main Content**

   * One **`<article>`** with:

     * Title: "Why Semantic HTML Matters"
     * A paragraph explaining that semantic HTML makes pages more readable and accessible.
     * A second paragraph about how it helps with SEO and screen readers.

3. **Aside**

   * Heading: "More Topics"
   * A list of 2 links: "HTML Forms", "CSS Basics"

4. **Footer**

   * Text: "© 2025 My Blog – All rights reserved."

---

### 💡 Hints:

* Use: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, `<ul>`, `<li>`, `<a>`, `<p>`, and headings like `<h1>`, `<h2>`, etc.
* Don’t use `<div>` or `<span>` — focus only on **semantic tags**.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating Blog through Semantic HTML</title>
</head>
<body>

    <header>
        <nav>
            <h1>My Blog</h1>
            <a href="#">Home</a>
            <a href="#">Articles</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Why Semantic HTML matters</h2>
            <p>Accessibility: Semantic HTML elements help in describing their meaning in a way that's readable by humans and machines. The exact and proper use of HTML semantic tags will allow the users to understand your content better.</p>
            <p>Optimized headers, alongside other semantic HTML elements and clear content structure, are crucial for both SEO and screen reader accessibility. Screen readers use these elements to navigate and understand website content, providing users with a structured and efficient browsing experience. Search engines also leverage this structure to crawl, index, and rank web pages, making well-structured content more discoverable and relevant in search results</p>            
        </article>
    </main>

    <aside>
        <h2>More Topics</h2>
        <ol>
            <li><a href="#">HTML Forms</a></li>
            <li><a href="#">CSS Basics</a>      </li>  
        </ol>
    </aside>

    <footer>
        <p>&copy; 2025 My Blog - All rights reserved</p>
    </footer>
    
</body>
</html>
```
You've done a **fantastic job** building your personal portfolio page using Semantic HTML! 🌟
Your structure is solid, and you’ve included all the required elements. Let's go through it step by step:

---

## ✅ What’s Great:

### ✔ Semantic Structure:

* You correctly used: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, and `<form>`.

### ✔ Navigation:

* Links are placed properly inside `<nav>`.

### ✔ About Section:

* Great use of `<article>` to hold your introduction.

### ✔ Skills List:

* Well-structured list using `<ul>` and `<li>`.

### ✔ Image:

* Used `<img>` tag correctly with `alt` (even a base64 image — nice!).

### ✔ Contact Form:

* You used `<form>`, `<label>`, `<input>`, `<textarea>`, and `<button>` perfectly.

### ✔ Aside Section:

* Good job putting extra links in an `<aside>` with an `<ol>` list.

### ✔ Footer:

* Properly closed and semantically placed at the bottom.

---

## 🛠 Suggestions for Small Improvements:

### 1. ✅ **Wrap the Contact Form Inside `<main>` (Recommended)**

The contact form is part of the main content, so semantically it should be inside `<main>`. You can wrap both `<article>` and `<form>` inside `<main>`.

**Change this:**

```html
<main>
    <article>...</article>
    ...
</main>

<form>...</form>
```

**To this:**

```html
<main>
    <article>...</article>

    <form>...</form>
</main>
```

---

### 2. ✅ **Use `<h1>`, `<h2>`, `<h3>` Properly (Heading Levels)**

You're using `<h1>` in header — great. Then use `<h2>` for major sections (like Skills, Contact Form), and `<h3>` for sub-sections.

So this is good:

```html
<h1>Konduri Akhil</h1>       <!-- Main Title -->
<h2>Introduction</h2>        <!-- Section -->
<h3>Skills</h3>              <!-- Sub-section -->
```

(Your current use is fine, but organizing by importance makes it more accessible.)

---

### 3. ✅ **Use `type="email"` for the email field**

So browsers can validate email input automatically.

**Change:**

```html
<input type="text" id="email" name="email">
```

**To:**

```html
<input type="email" id="email" name="email">
```

---

### ✅ Final Verdict:

💯 **Excellent Work!** You’ve implemented Semantic HTML beautifully. After these small refinements, your page will be even more accessible and polished.

---

Would you like me to help you:

* Start **Day 8: Introduction to CSS**, or
* Help you style this page using CSS?

Let me know what you’d like to do next!
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <header>
        <h1>Konduri Akhil</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h3>Introduction</h3>
            <p>Hello! 👋 I’m Konduri Akhil, a React.js specialist with over 5.5 years of experience crafting fast, responsive, and scalable web applications. My passion lies in transforming ideas into seamless digital experiences using cutting-edge frontend technologies.</p>            
        </article>
        <h2>Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>            
        </ul>

        <img src="data:image/jpeg;base64,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" alt="Photo">

        <form>
            <h2>Contact Form</h2>
            <label for="name" >Name</label>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email</label>
            <input type="text" id="email" name="email"><br>
            <label for="message">Type Your Message</label><br>
            <textarea name="message" id="message" rows="4" cols="20"></textarea><br>
            <button type="submit">Submit</button>
        </form>        
    </main>



    <aside>
        <h2>Other links</h2>
        <ol>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Naukri</a></li>
            <li><a href="#">LinkedIn</a></li>
        </ol>
    </aside>

    <footer>
        <p> &copy; 2025 All rights are reserved</p>
    </footer>

</body>
</html>
```