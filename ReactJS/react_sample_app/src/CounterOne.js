import { Component } from "react";

class CounterOne extends Component
{

    constructor(){
        super();
        this.state = {
            counter:  0,
            username: 'Akhil'
        }
    }

    incrementcounter=()=>{
        this.setState({
            counter: this.state.counter +1
        })
    }

    decrementcounter =() =>{
        this.setState({
            counter: this.state.counter -1
        })
    }

    resetcounter = () =>{
        this.setState({
            counter: 0
        })
    }

    render ()
    {
        return <div>
            <h1>Counter One Class Component</h1>
            <h3>Counter: {this.state.counter} - { this.state.counter % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <button onClick={this.incrementcounter} >Increment</button>
            <button onClick={this.decrementcounter}>Decrement</button>
            <button onClick={this.resetcounter}>Reset</button>
        </div>
    }
}
export default CounterOne