# ReactJS Day23 Notes: Context API

## 📋 Overview
The Context API is React's built-in solution for state management that eliminates prop drilling by making data globally accessible across components.

## 🎯 Key Concepts

### 1. **What is Context API?**
- **Purpose**: Avoid prop drilling (passing props through multiple component levels)
- **Benefit**: Make data globally accessible to any component at any nesting level
- **Location**: Usually defined in root component (App.js) or dedicated Context.js file

### 2. **Core Components**

| Component | Purpose | Usage |
|-----------|---------|--------|
| `React.createContext()` | Creates context object | `const MyContext = React.createContext()` |
| `Provider` | Supplies data to child components | `<MyContext.Provider value={data}>` |
| `Consumer` | Reads data (class components) | `<MyContext.Consumer>{value => ...}</MyContext.Consumer>` |
| `useContext()` | Reads data (functional components) | `const value = useContext(MyContext)` |

## 🛠️ Implementation Steps

### Step 1: Create Context
```javascript
import React from "react";
export const UserContext = React.createContext();
```

### Step 2: Provide Context (App.js)
```javascript
<UserContext.Provider value={{ username: "Akhil", role: "Frontend Dev" }}>
  <Child />
</UserContext.Provider>
```

### Step 3: Consume Context

#### Functional Components (useContext hook)
```javascript
import { useContext } from 'react';
import { UserContext } from './App';

const Child = () => {
  const { username, role } = useContext(UserContext);
  return <div>{username} - {role}</div>;
};
```

#### Class Components (Consumer)
```javascript
import { UserContext } from './App';

class ChildClass extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(value) => <div>{value.username} - {value.role}</div>}
      </UserContext.Consumer>
    );
  }
}
```

## 🔄 Multiple Contexts

### Creating Multiple Contexts
```javascript
export const UserContext = React.createContext();
export const SubjectsContext = React.createContext();
```

### Nesting Providers
```javascript
<UserContext.Provider value={userData}>
  <SubjectsContext.Provider value={subjects}>
    <App />
  </SubjectsContext.Provider>
</UserContext.Provider>
```

### Consuming Multiple Contexts
```javascript
const Component = () => {
  const user = useContext(UserContext);
  const subjects = useContext(SubjectsContext);
  
  return (
    <div>
      <h2>User: {user.username}</h2>
      <h3>Subjects: {subjects.join(', ')}</h3>
    </div>
  );
};
```

## 📊 Real-World Examples

### Example 1: User Authentication Context
```javascript
// App.js
<UserContext.Provider value={{username: 'akhilkonduri', id: '488'}}>
  <ComponentC />
  <ComponentE />
</UserContext.Provider>

// ComponentC.js (Functional)
const { username, id } = useContext(UserContext);

// ComponentE.js (Class)
<UserContext.Consumer>
  {(value) => <div>{value.username} - {value.id}</div>}
</UserContext.Consumer>
```

### Example 2: Theme/Subjects Context
```javascript
// Multiple contexts
<SubjectsContext.Provider value={['HTML', 'JS', 'REACT']}>
  <ComponentA />
  <ComponentF />
</SubjectsContext.Provider>

// ComponentA.js - List rendering
subjects.map((item, index) => <li key={index}>{item}</li>)

// ComponentF.js - Class component with Consumer
<SubjectsContext.Consumer>
  {(subjects) => <div>{subjects.join(', ')}</div>}
</SubjectsContext.Consumer>
```

## 🎨 Visual Structure
- **Provider**: Top-level component that makes data available
- **Consumer**: Any component that needs access to the data
- **Context**: The bridge between Provider and Consumer

## ⚡ Best Practices
1. **Define contexts in separate files** for better organization
2. **Use meaningful context names** (UserContext, ThemeContext, etc.)
3. **Avoid overusing** - only for truly global data
4. **Combine related data** in single context when possible
5. **Use custom hooks** for complex context logic

## 🚀 Common Use Cases
- User authentication state
- Theme preferences
- Language settings
- Application configuration
- Shopping cart data
- User preferences
