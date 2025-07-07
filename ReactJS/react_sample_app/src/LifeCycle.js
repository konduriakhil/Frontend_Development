import { Component } from "react";

class LifeCycle extends Component
{    
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
        console.log('Calling Constructor()....')
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    static getDerivedStateFromProps(){
        console.log('Calling getDerivedStateFromProps()....')
        return null;
    }

    componentDidMount(){
        console.log('Calling componentDidMount().....')
    }

    render(){
        console.log('Calling render()...')
        return <div>
            <h1>Life Cycle Methods</h1>
            <h2>Counter - {this.state.counter}</h2>
            <button onClick={this.increment}>Increment</button>
        </div>
    }
}
export default LifeCycle

