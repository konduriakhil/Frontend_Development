import { Component } from "react";

class Clock extends Component
{

    constructor(){
        super();
        this.state ={
            timer: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount(){
        setInterval(() => this.setState({
            timer: new Date().toLocaleTimeString()
        }), 1000)
    }

    render(){
        return <div>
            <h1>Time: {this.state.timer}</h1>
        </div>
    }
}
export default Clock