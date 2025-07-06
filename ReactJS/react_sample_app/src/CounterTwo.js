import { Component } from "react";

class CounterTwo extends Component
{

    constructor(){
        super();
        this.state = {
            counter:  0,
            username: 'Akhil'
        }
    }


    // decrementcounter =() =>{
    //     this.setState({
    //         counter: this.state.counter -1
    //     })
    // }

    // resetcounter = () =>{
    //     this.setState({
    //         counter: 0
    //     })
    // }

    render ()
    {
        return <div>
            <h1>Counter Two Class Component</h1>
            <h2>Welcome {this.state.username} </h2>
            <h3>Counter: {this.state.counter} - { this.state.counter % 2 === 0 ? 'Even' : 'Odd'}</h3>
            <button onClick={() => this.setState({ counter: this.state.counter +1})} >Increment</button>
            <button onClick={() => this.setState({ counter: this.state.counter -1})}>Decrement</button>
            <button onClick={() => this.setState({ counter: 0, username: 'Akhil'})}>Reset</button>
            <hr></hr>
            <button onMouseOver={() => this.setState({username: 'Konduri Akhil'})}>Update Name</button>
        </div>
    }
}
export default CounterTwo