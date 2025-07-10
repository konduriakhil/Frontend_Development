import { Component } from "react";

import loaderimg from './images/loading.gif'

class Conditional extends Component
{

    constructor(){
        super();
        this.state = {
            username: 'Akhil',
            status: false,
            isloggedin: true,
        }
    }

    toggleImage = () => {
        this.setState({
            status: !this.state.status
        })
    }

    render(){
        return <div>
            <h1>Conditional rendering</h1>

            {
                this.state.status ? <h1>Hello {this.state.username}</h1> : <h1>Unknown User</h1>
            }

            {
                this.state.status ? null  : <img src={loaderimg} height={100} width={200} />
            }
            {
                this.state.isloggedin && <h1>Welcome {this.state.username}</h1>
            }
            <button onClick={this.toggleImage}>Toggle button</button>
        </div>
    }
}
export default Conditional