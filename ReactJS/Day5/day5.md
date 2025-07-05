```jsx
const Users = () => {
    return <div>
        <h1>Welcome to Users</h1>
    </div>
}
export default Users
```
```jsx
const Users = () => {

    var names = ['AKhil', 'Sai', 'Varshath'];
    const user = {
        firstname: 'Akhil',
        lastname: 'Konduri',
        city: 'Hyd'
    }
    return(
         <div>
             <h1>Welcome to Users</h1>
             <h2>Names: {names.join(', ')}</h2>
             <h2>Full Name: {user.firstname +' '+user.lastname}</h2>        
    </div>
    )
}
export default Users
```
```jsx
import { Component } from "react";
 
class UserCls extends Component
{
    names = ['AKhil', 'Sai', 'Varshath'];
    user = {
        firstname: 'Akhil',
        lastname: 'Konduri',
        city: 'Hyd'
    }

    render()
    {
        return(
            <div>
                <h1>Users list Class Component</h1>
                <h2>Names: {this.names.join(' #')}</h2>
                <h2>This is {this.user.firstname+' '+this.user.lastname} from {this.user.city}. </h2>
            </div>
        )
    }
}
export default UserCls
```
```jsx
import { Component } from "react";
 
class UserCls extends Component
{
    names = ['AKhil', 'Sai', 'Varshath'];
    users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];
    render()
    {
        return (<div>
            <h1>Class Component Users Info</h1>
            <table border={1} cellPadding={10}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>city</th>
                    <th>piconde</th>
                </tr>
            </thead>
            <tbody>

                {
                    this.users.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.firstname+' '+item.lastname}</td>
                        <td>{item.city}</td>
                        <td>{item.pincode}</td>
                    </tr>)
                }
             </tbody>
             </table>
        </div>

        )
    }
}
export default UserCls
```
```jsx
const Users = () => {

    var names = ['AKhil', 'Sai', 'Varshath'];
    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];
    return(
         <div>
            <h1>Functional Component Users</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => <tr>
                            <td key={index}>{index+1}</td>
                            <td key={index}>{item.firstname+' '+item.lastname}</td>
                            <td key={index}>{item.city}</td>
                            <td key={index}>{item.pincode}</td>
                        </tr>)
                    }
                </tbody>
            </table>
    </div>
    )
}
export default Users
```
```jsx
const Age = () =>{

    const calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    const username = 'Akhil';
    const dob = '2-26-1998';


    return <div>
        <h1>He is Mr. {username} aged about {calculateAge(dob)} years </h1>
    </div>

}
export default Age
```
## way of creating a function and using it in a component
```jsx
const Age = () =>{

    const calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob:"6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob:"6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob:"6-12-1948"},
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob:"6-2-1938"},
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 , dob:"6-2-1948"}
    ];


    return <div>
        <h1>Functional Component</h1>
        {
            users.map((item, index) => <h4 key={index}>
                This is Mr.{item.firstname + " "+ item.lastname} aged about {calculateAge(item.dob)} years ago
            </h4>)
    }
    </div>

}
export default Age
```

```jsx
import { Component } from "react";

class AgeCls extends Component
{
    users = [
        { firstname: "Akhil", lastname: "Konduri", city: "Ongole", pincode: 500032, dob:"6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob:"6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob:"6-12-1948"},
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob:"6-2-1938"},
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 , dob:"6-2-1948"}
    ];
     calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }

    render(){
        return <div>
            <h1>This is Class Component Age Calculation</h1>
            {
                this.users.map((item, index)=>{
                    return <h4 key={index}>This is Mr.{item.firstname} aged about {this.calculateAge(item.dob)} </h4>
                })
            }
        </div>
    }
}
export default AgeCls
```
```jsx
import { Component } from "react";

class AgeCls extends Component
{
    users = [
        { firstname: "Akhil", lastname: "Konduri", city: "Ongole", pincode: 500032, dob:"6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob:"6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 , dob:"6-12-1948"},
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 , dob:"6-2-1938"},
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 , dob:"6-2-1948"}
    ];
     calculateAge = (birthday) =>{
        birthday = new Date(birthday);
        return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
    }    

    calculatePercentage = (price, discount) =>{
        return price- price*discount/100;
    }

    render(){
        return <div>

            <h1>This is Class Component Age Calculation</h1>
            {
                this.users.map((item, index)=>{
                    return <h4 key={index}>This is Mr.{item.firstname} aged about {this.calculateAge(item.dob)} </h4>                   
                })
            }
            <h1>You have to pay {this.calculatePercentage(1329, 50)} Amount</h1>
        </div>
    }
}
export default AgeCls
```
# ChatGPT
Here's the **full `.md` (Markdown) version of your ReactJS notes**, including the **complete user list** wherever it was truncated. I've organized everything clearly and kept all examples clean and easy to follow.

---

# 📘 ReactJS Notes: Functional & Class Components, Mapping, and Custom Functions

---

## ✅ Functional Components

### 1. **Basic Functional Component**

```jsx
const Users = () => {
    return (
        <div>
            <h1>Welcome to Users</h1>
        </div>
    );
};
export default Users;
```

---

### 2. **Using Array and Object in JSX**

```jsx
const Users = () => {
    var names = ['Akhil', 'Sai', 'Varshath'];
    const user = {
        firstname: 'Akhil',
        lastname: 'Konduri',
        city: 'Hyd'
    };

    return (
        <div>
            <h1>Welcome to Users</h1>
            <h2>Names: {names.join(', ')}</h2>
            <h2>Full Name: {user.firstname + ' ' + user.lastname}</h2>
        </div>
    );
};
export default Users;
```

---

### 3. **Render User Data in Table using `map()`**

```jsx
const Users = () => {
    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];

    return (
        <div>
            <h1>Functional Component Users</h1>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstname + ' ' + item.lastname}</td>
                            <td>{item.city}</td>
                            <td>{item.pincode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Users;
```

---

### 4. **Helper Function: Age Calculation**

```jsx
const Age = () => {
    const calculateAge = (birthday) => {
        birthday = new Date(birthday);
        return new Number((new Date() - birthday) / 31536000000).toFixed(0);
    };

    const username = 'Akhil';
    const dob = '2-26-1998';

    return (
        <div>
            <h1>He is Mr. {username} aged about {calculateAge(dob)} years</h1>
        </div>
    );
};
export default Age;
```

---

### 5. **Mapping and Using Function for Each User**

```jsx
const Age = () => {
    const calculateAge = (birthday) => {
        birthday = new Date(birthday);
        return new Number((new Date() - birthday) / 31536000000).toFixed(0);
    };

    const users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032, dob: "6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob: "6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671, dob: "6-12-1948" },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006, dob: "6-2-1938" },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249, dob: "6-2-1948" }
    ];

    return (
        <div>
            <h1>Functional Component</h1>
            {users.map((item, index) => (
                <h4 key={index}>
                    This is Mr. {item.firstname + " " + item.lastname} aged about {calculateAge(item.dob)} years
                </h4>
            ))}
        </div>
    );
};
export default Age;
```

---

## 🧠 Class Components

### 6. **Basic Class Component**

```jsx
import { Component } from "react";

class UserCls extends Component {
    names = ['Akhil', 'Sai', 'Varshath'];
    user = {
        firstname: 'Akhil',
        lastname: 'Konduri',
        city: 'Hyd'
    };

    render() {
        return (
            <div>
                <h1>Users list Class Component</h1>
                <h2>Names: {this.names.join(' #')}</h2>
                <h2>This is {this.user.firstname + ' ' + this.user.lastname} from {this.user.city}</h2>
            </div>
        );
    }
}
export default UserCls;
```

---

### 7. **Mapping with Table in Class Component**

```jsx
import { Component } from "react";

class UserCls extends Component {
    users = [
        { firstname: "Ram", lastname: "Babburi", city: "Ongole", pincode: 500032 },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001 },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671 },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006 },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249 }
    ];

    render() {
        return (
            <div>
                <h1>Class Component Users Info</h1>
                <table border={1} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.users.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.firstname + ' ' + item.lastname}</td>
                                <td>{item.city}</td>
                                <td>{item.pincode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default UserCls;
```

---

### 8. **Age Calculation & Discount Price in Class Component**

```jsx
import { Component } from "react";

class AgeCls extends Component {
    users = [
        { firstname: "Akhil", lastname: "Konduri", city: "Ongole", pincode: 500032, dob: "6-2-1998" },
        { firstname: "Anand", lastname: "Pabbineedi", city: "Kakinada", pincode: 533001, dob: "6-2-1968" },
        { firstname: "Vinod", lastname: "Katte", city: "Anantapur", pincode: 515671, dob: "6-12-1948" },
        { firstname: "Lakshman", lastname: "D", city: "Kakinada", pincode: 533006, dob: "6-2-1938" },
        { firstname: "Sri Raj", lastname: "Kamisetti", city: "Amalapuram", pincode: 533249, dob: "6-2-1948" }
    ];

    calculateAge = (birthday) => {
        birthday = new Date(birthday);
        return new Number((new Date() - birthday) / 31536000000).toFixed(0);
    };

    calculatePercentage = (price, discount) => {
        return price - (price * discount / 100);
    };

    render() {
        return (
            <div>
                <h1>This is Class Component Age Calculation</h1>
                {this.users.map((item, index) => (
                    <h4 key={index}>This is Mr. {item.firstname} aged about {this.calculateAge(item.dob)}</h4>
                ))}
                <h1>You have to pay {this.calculatePercentage(1329, 50)} Amount</h1>
            </div>
        );
    }
}
export default AgeCls;
```

---

## 📌 Concepts Summary

| Concept              | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| Functional Component | Stateless React component using a function                          |
| Class Component      | Component with optional state and methods using ES6 class           |
| JSX                  | XML-like syntax to write UI in JS                                   |
| `map()`              | Used to loop through arrays and render JSX                          |
| `key`                | Unique identifier in mapped elements (important for list rendering) |
| Helper Functions     | Functions defined inside components to avoid repetition             |
| `<table>` in JSX     | Used for rendering structured tabular data                          |
| `new Date()`         | Used to calculate age from DOB                                      |
| Discount Calculation | Example shown using percentage formula                              |

---