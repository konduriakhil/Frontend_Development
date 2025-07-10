import { Component } from "react";

class Practise extends Component
{

    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    increment = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render()
    {
        return <div>
            <h1>Class components example</h1>
            <h2>Counter- {this.state.counter}</h2>
            <button onClick={this.increment}>Increment</button>
        </div>
    }


}
export default Practise