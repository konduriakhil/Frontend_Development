import { Component } from "react";
import Welcome from "./Welcome";

class Simple extends Component {
  username = "AkhilKonduri";
  y = 100;


  render() {
    let x = 200;
    
    return (
      <div>
        <h1>Welcome {this.username}</h1>
        <h1>Class Component</h1>
        <p>The value of x is: {x}</p>
        <h2>Current Date: { new Date().toLocaleString() }</h2>
        <h1>The sum of x and y is: {x + this.y}</h1>
        <hr />
      </div>
    );
  }
}

export default Simple;
