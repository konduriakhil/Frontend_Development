# Day 1 - ReactJS Notes

## What is ReactJS?

- ReactJS is a JavaScript library used to build user interfaces.
- Developed and maintained by Facebook.
- It follows a component-based architecture.
- Helps in building single-page applications with reusable UI components.

## Key Features

- **JSX (JavaScript XML)**: Allows writing HTML elements in JavaScript.
- **Components**: Reusable and independent pieces of UI.
- **Virtual DOM**: Improves performance by updating only changed parts of the DOM.
- **Unidirectional Data Flow**: Data flows in one direction making it easy to debug.
- **Declarative UI**: You describe what the UI should look like.

## Prerequisites

Before learning React, it's recommended to have good knowledge of:

- HTML
- CSS
- JavaScript (ES6+)
- DOM Manipulation

## Setting up Environment

1. **Node.js** must be installed (recommended: latest LTS version).
2. **npm (Node Package Manager)** gets installed with Node.js.
3. To check versions:
   ```bash
   node -v
   npm -v
   ```

4. If npm doesn't show a version, ensure it's installed correctly or reinstall Node.js.

## Create React App (CRA)

To create a new React project:

```bash
npx create-react-app my-app
cd my-app
npm start
```

* `npx`: Runs the package without globally installing it.
* `npm start`: Starts the development server.

## Folder Structure

```
my-app/
│
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

* `index.js` is the entry point.
* `App.js` is the root component.

## Component Structure

Example functional component:

```js
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

## Export and Import

* Exporting a component:

  ```js
  export default Welcome;
  ```
* Importing a component:

  ```js
  import Welcome from './Welcome';
  ```

---
