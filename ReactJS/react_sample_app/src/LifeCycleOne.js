const { Component } = require("react");

class LifeCycleOne extends Component
{

    constructor(){
        super();
        this.state={
            count: 0,
            username: 'Konduri'
        };
        console.log('Calling Constructor().....')
    }

    static getDerivedStateFromProps(){
        console.log('calling getDerivedStateFromProps()......')
        return null;
    }

    componentDidMount(){
        console.log('Calling componentDidMount().....')
    }

    shouldComponentUpdate(prevProps, prevState){
        console.log('Calling shouldComponentUpdate()......')
        console.log(prevState)
        if(this.state.username === prevState.username){
            return false;
        }
        return true;
    } 

    getSnapshotBeforeUpdate(){
        console.log('Calling getSnapshotBeforeUpdate().....')
        return null;
    }

    componentDidUpdate(){
        console.log('Calling componentDidUpdate().... ')
    }

    render(){
        console.log('Calling render()....')
        return <div>
            <h1>Life Cycle Methods</h1>
            <h2>Count-{this.state.count}</h2>
            <button onClick={ () => this.setState({count: this.state.count + 1})}>Increment</button>
            <hr></hr>
            <h2>Welcome {this.state.username}</h2>
            <button onClick={() => {this.setState({username: 'Akhil'})}}>Update Name</button>
        </div>
    }
}
export default LifeCycleOne