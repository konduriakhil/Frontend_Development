import { Component } from "react";

class StateDemo extends Component
{

    counter = 10;
    
    incrementCounter = () => {
        this.counter = this.counter + 1;
        console.log(this.counter)
    }


    render()
    {
        return <div>
            <h1>State Demo</h1>
            <h3>Counter - {this.counter}</h3>
            <button onClick={this.incrementCounter}>Increment</button>
        </div>
    }
}
export default StateDemo