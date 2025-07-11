#### **Introduction to State Management**
- **State** in React is used to manage data within a component.
- Functional components use **hooks** like `useState` to manage state.
- Class components use `this.state` and `this.setState` for state management.

---

#### **Using `useState` Hook**
- **Importing `useState`:**
  ```javascript
  import { useState } from "react";
  ```
- **Syntax:**
  ```javascript
  const [stateVariable, setStateFunction] = useState(initialValue);
  ```
  - `stateVariable`: Holds the current state value.
  - `setStateFunction`: Updates the state value.
  - `initialValue`: The initial value of the state.

---

#### **Code Snippets**

##### **Basic Counter Example**
```javascript
import { useState } from "react";

const HookCounter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Counter - {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
};

export default HookCounter;
```

---

##### **Managing Multiple States**
```javascript
import { useState } from "react";

const HookCounter = () => {
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState("Akhil");

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const updateUsername = () => {
        setUsername("Konduri Akhil");
    };

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Counter - {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <hr />
            <h2>Welcome to {username}</h2>
            <button onClick={updateUsername}>Update Name</button>
        </div>
    );
};

export default HookCounter;
```

---

##### **Conditional Rendering with State**
```javascript
import { useState } from "react";

const HookCounter = () => {
    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState("Akhil");
    const [status, setStatus] = useState(true);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const updateUsername = () => {
        setUsername("Konduri Akhil");
    };

    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Counter - {counter}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <hr />
            <h2>Welcome to {username}</h2>
            <button onClick={updateUsername}>Update Name</button>
            <hr />
            {status ? <h2>Welcome {username}</h2> : <h2>Unknown User</h2>}
            <button onClick={() => setStatus(!status)}>Toggle</button>
        </div>
    );
};

export default HookCounter;
```

---

#### **Key Concepts**
- **State Updates:**
  - State updates are asynchronous.
  - Use `setStateFunction` to update the state.
- **Conditional Rendering:**
  - Use JavaScript expressions inside JSX to conditionally render elements.
- **Event Handling:**
  - Use `onClick` or other event handlers to trigger state updates.

---

#### **Screenshots**
1. **Counter Example Output:**
   - Displays a counter that increments on button click.
   - Example: `Counter - 9`.

2. **Multiple States Example Output:**
   - Displays a counter and a username.
   - Includes buttons to increment the counter and update the username.

3. **Conditional Rendering Example Output:**
   - Toggles between showing a welcome message and "Unknown User" based on state.

---
