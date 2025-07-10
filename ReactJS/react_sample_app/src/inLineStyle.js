import { Component } from "react";

class InLineStyle extends Component
{

    constructor(){
        super();
        this.state={
            username1: 'Akhil',
            username2: 'Sai',
            status: false,
        }
    }

    render(){
        return (
            <div>
                <h1 style={{color: 'gray', fontSize: '25px', textDecoration: 'Underline'}}>InLineStyle</h1>
                <hr></hr>
                {
                    this.state.status ? <h2> Welcome {this.state.username1}</h2> : <h2>Welcome {this.state.username2}</h2>
                }
                <hr></hr>
                <h2 style={this.state.status ? {color:"Red"} : {color: 'blue'}}>All The Best</h2>
            </div>
        )

    }
}
export default InLineStyle
