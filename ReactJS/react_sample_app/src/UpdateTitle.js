import { Component } from "react";

class UpdateTitle extends Component
{

    constructor(){
        super();
        this.state={
            counter: 0
        }
    }

    increment= () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount(){
        console.log('calling componentDidMount().... ')
         document.title = 'you clicked ' +this.state.counter+ ' times'
    }

    componentDidUpdate(){
        console.log('Calling componentDidUpdate()....')
        document.title = 'you clicked ' +this.state.counter+ ' times'
    }

    render(){
        return <div>
            <h1>Welcome to React</h1>
            <h2>Counter- {this.state.counter}</h2>
            <button onClick={this.increment}>Increment</button>

        </div>
    }
}
export default UpdateTitle