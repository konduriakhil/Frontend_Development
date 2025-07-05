import { Component } from "react";

class WelcomeCls extends Component
{
    
    render()
    {
        console.log(this.props)
        return <div>
            <h1>Class Component</h1>
            <h2>Welcome {this.props.username}</h2>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>dob</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.userslist.map((item, index) => <tr key={index}>
                            <td >{index+1}</td>
                            <td >{item.firstname+' '+item.lastname}</td>
                            <td >{item.city}</td>
                            <td >{item.pincode}</td>
                            <td >{ this.props.agecalculator(item.dob)} years old</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        
    }
}
export default WelcomeCls