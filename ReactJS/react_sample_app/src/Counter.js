import { Component } from "react";

class Counter extends Component
{

    constructor() {
        super();
        this.state = {
            counter: 10,
            username: 'Akhil'
        }
    }

    incrementcounter = () =>{
        //  this.state.counter = this.state.counter + 1;
        this.setState({
            counter: this.state.counter +1
        })
    }

    nameUpdate = () =>{
        this.setState({
            username: 'Sai'
        })
    }
    
    render()
    {
        console.log('Calling...')
        return <div>
            <h1>Welcome {this.state.username}</h1>
            <h2>counter - {this.state.counter}</h2>
            <button onClick={this.incrementcounter}>Increment</button>
            <button onClick={this.nameUpdate}>update Name</button>
        </div>
    }
}
export default Counter
