import { Component } from "react";

class UserDetails extends Component
{
    name = 'Akhil';;
    age = '27';
    skills = ['HTML', 'CSS', 'JAVA SCRIPT', 'REACT'];

    render(){
        return(
            <React.Fragment>
                <h2>Name: {this.name}</h2>
                <h2>Age: {this.age}</h2>
                <h2>Skills: </h2>
                <ul>
                    {this.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <h2>Date & Time: {new Date().toLocaleString()}</h2>
            </React.Fragment>
        )
    }
}
export default UserDetails