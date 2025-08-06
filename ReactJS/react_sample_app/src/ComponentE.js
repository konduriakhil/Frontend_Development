import React, { Component } from "react";
import { UserContext } from "./App";

class ComponentE extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {
          (value) => (
            <div>
              <h1>ComponentE</h1>
              <h2>Username: {value.username}</h2>
              <h3>ID: {value.id}</h3>
            </div>
          )
        }
      </UserContext.Consumer>
    )
  }
}
export default ComponentE

