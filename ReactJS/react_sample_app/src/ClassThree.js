import { Component } from "react";

class ClassThree extends Component
{

    constructor(){
        super();
        this.state = {
            counter: 0,
            username: 'Akhil',
            city: 'Hyderabad'
        }
    }

    increasecountby5 = () =>{
/*         for(var i=0; i<5; i++){
            this.setState((preState) =>({
                counter: preState.counter + 1
            }))
        } */
       this.setState({
        counter: this.state.counter + 5
       })
    }

    
 

    render(){
        return <div>
            <h1>Increase Count (By 5)-{this.state.counter}</h1>
            <button onClick={this.increasecountby5}>Increase by 5</button>


        </div>
    }
}

export default ClassThree